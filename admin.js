const login = document.getElementById("login");
const panel = document.getElementById("panel");
const claveInput = document.getElementById("claveInput");
const loginError = document.getElementById("loginError");
const avisoConfig = document.getElementById("avisoConfig");
const tablaVisitas = document.getElementById("tablaVisitas");
const totalVisitas = document.getElementById("totalVisitas");
const ultimaVisita = document.getElementById("ultimaVisita");

function mostrarPanel() {
  login.style.display = "none";
  panel.style.display = "block";
  cargarVisitas();
}

function initFirebaseAdmin() {
  if (!VISITAS_ACTIVAS) return null;
  if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
  return firebase.firestore();
}

function formatearFechaAdmin(timestamp, fechaTexto, fechaLocal) {
  if (fechaTexto) return fechaTexto;

  if (timestamp && timestamp.toDate) {
    return new Intl.DateTimeFormat("es-MX", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "America/Mexico_City",
    }).format(timestamp.toDate());
  }

  if (fechaLocal) {
    return new Intl.DateTimeFormat("es-MX", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "America/Mexico_City",
    }).format(new Date(fechaLocal));
  }

  return "Sin fecha";
}

async function cargarVisitas() {
  const db = initFirebaseAdmin();

  if (!db) {
    avisoConfig.style.display = "block";
    avisoConfig.textContent =
      "Firebase aun no esta configurado. Edita firebase-config.js con tus datos de Firebase para ver las visitas.";
    return;
  }

  avisoConfig.style.display = "none";
  tablaVisitas.innerHTML = `<tr><td colspan="7">Cargando visitas...</td></tr>`;

  try {
    const snapshot = await db.collection("visitas").orderBy("fecha", "desc").limit(200).get();
    const visitas = [];

    snapshot.forEach((doc) => {
      visitas.push({ id: doc.id, ...doc.data() });
    });

    totalVisitas.textContent = String(visitas.length);

    if (visitas.length === 0) {
      ultimaVisita.textContent = "—";
      tablaVisitas.innerHTML = `<tr><td colspan="7">Aun no hay visitas registradas.</td></tr>`;
      return;
    }

    const primera = visitas[0];
    ultimaVisita.textContent = formatearFechaAdmin(
      primera.fecha,
      primera.fechaTexto,
      primera.fechaLocal
    ).split(",")[0];

    tablaVisitas.innerHTML = visitas
      .map((visita, index) => {
        const fecha = formatearFechaAdmin(visita.fecha, visita.fechaTexto, visita.fechaLocal);
        return `
          <tr>
            <td>${index + 1}</td>
            <td>${fecha}</td>
            <td>${visita.navegador || "—"}</td>
            <td>${visita.sistema || "—"}</td>
            <td>${visita.dispositivo || "—"}</td>
            <td>${visita.idioma || "—"}</td>
            <td>${visita.pantalla || "—"}</td>
          </tr>
        `;
      })
      .join("");
  } catch (error) {
    tablaVisitas.innerHTML = `<tr><td colspan="7">Error al cargar visitas: ${error.message}</td></tr>`;
  }
}

document.getElementById("btnLogin").addEventListener("click", () => {
  if (claveInput.value === ADMIN_CLAVE) {
    sessionStorage.setItem("admin_autorizado", "1");
    loginError.textContent = "";
    mostrarPanel();
  } else {
    loginError.textContent = "Clave incorrecta.";
  }
});

claveInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") document.getElementById("btnLogin").click();
});

document.getElementById("btnRefrescar").addEventListener("click", cargarVisitas);

if (sessionStorage.getItem("admin_autorizado") === "1") {
  mostrarPanel();
}
