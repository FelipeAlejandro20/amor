function initFirebaseVisitas() {
  if (!VISITAS_ACTIVAS || typeof firebase === "undefined") return null;

  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  return firebase.firestore();
}

function detectarNavegador(userAgent) {
  if (/Edg\//i.test(userAgent)) return "Microsoft Edge";
  if (/OPR\//i.test(userAgent) || /Opera/i.test(userAgent)) return "Opera";
  if (/Firefox\//i.test(userAgent)) return "Firefox";
  if (/Chrome\//i.test(userAgent)) return "Chrome";
  if (/Safari\//i.test(userAgent)) return "Safari";
  return "Desconocido";
}

function detectarSistema(userAgent) {
  if (/Windows/i.test(userAgent)) return "Windows";
  if (/Android/i.test(userAgent)) return "Android";
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
  if (/Mac OS X/i.test(userAgent)) return "macOS";
  if (/Linux/i.test(userAgent)) return "Linux";
  return "Desconocido";
}

function detectarDispositivo(userAgent) {
  if (/Mobile|Android|iPhone|iPad|iPod/i.test(userAgent)) return "Móvil";
  if (/Tablet|iPad/i.test(userAgent)) return "Tablet";
  return "Escritorio";
}

function formatearFechaVisita(fecha) {
  return new Intl.DateTimeFormat("es-MX", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/Mexico_City",
  }).format(fecha);
}

async function registrarVisita() {
  const db = initFirebaseVisitas();
  if (!db) return;

  const userAgent = navigator.userAgent;
  const ahora = new Date();

  try {
    await db.collection("visitas").add({
      fecha: firebase.firestore.FieldValue.serverTimestamp(),
      fechaLocal: ahora.toISOString(),
      fechaTexto: formatearFechaVisita(ahora),
      navegador: detectarNavegador(userAgent),
      navegadorCompleto: userAgent,
      sistema: detectarSistema(userAgent),
      dispositivo: detectarDispositivo(userAgent),
      idioma: navigator.language || "desconocido",
      pantalla: `${window.screen.width}x${window.screen.height}`,
      zonaHoraria: Intl.DateTimeFormat().resolvedOptions().timeZone || "desconocida",
      pagina: window.location.href,
    });
  } catch (error) {
    console.warn("No se pudo registrar la visita:", error);
  }
}

window.registrarVisita = registrarVisita;
