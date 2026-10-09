// ─── CONFIGURACIÓN ───
const INICIO_RELACION = new Date(2025, 10, 28, 0, 0, 0);

const FOTOS = [
  { src: "imagenes/foto1.jpg", cat: "romanticos", cap: "Nuestro comienzo" },
  { src: "imagenes/foto2.jpg", cat: "alegres", cap: "Sonrisas juntos" },
  { src: "imagenes/foto3.jpg", cat: "tiernos", cap: "Momentos dulces" },
  { src: "imagenes/foto4.jpg", cat: "besos", cap: "Un beso tuyo" },
  { src: "imagenes/foto5.jpg", cat: "alegres", cap: "Risas sin fin" },
  { src: "imagenes/foto6.jpg", cat: "romanticos", cap: "Juntos siempre" },
  { src: "imagenes/foto7.jpg", cat: "tiernos", cap: "Mi persona favorita" },
  { src: "imagenes/foto8.jpg", cat: "besos", cap: "Te amo" },
  { src: "imagenes/foto9.jpg", cat: "romanticos", cap: "Para siempre" },
  { src: "fotos/foto1.jpg", cat: "alegres", cap: "Aventuras juntos" },
  { src: "fotos/foto2.jpg", cat: "tiernos", cap: "Contigo todo es bonito" },
  { src: "fotos/foto3.jpg", cat: "romanticos", cap: "Nuestro amor" },
  { src: "fotos/foto4.jpg", cat: "besos", cap: "Un besito" },
  { src: "fotos/foto5.jpg", cat: "alegres", cap: "Felices juntos" },
  { src: "fotos/foto6.jpg", cat: "tiernos", cap: "Mi corazón" },
  { src: "fotos/foto7.jpg", cat: "romanticos", cap: "Eres mi todo" },
  { src: "fotos/foto8.jpg", cat: "besos", cap: "Besos infinitos" },
  { src: "fotos/foto9.jpg", cat: "alegres", cap: "Diversión juntos" },
  { src: "fotos/foto10.jpg", cat: "tiernos", cap: "Abrazos eternos" },
  { src: "fotos/foto11.jpg", cat: "romanticos", cap: "Amor verdadero" },
  { src: "fotos/foto12.jpg", cat: "besos", cap: "Te extraño" },
  { src: "fotos/foto13.jpg", cat: "alegres", cap: "Momentos felices" },
  { src: "fotos/foto14.jpg", cat: "tiernos", cap: "Mi princesa" },
  { src: "fotos/foto15.jpg", cat: "romanticos", cap: "Juntos para siempre" },
  { src: "fotos/foto16.jpg", cat: "besos", cap: "Un beso más" },
  { src: "fotos/foto17.jpg", cat: "alegres", cap: "Risas contigo" },
  { src: "fotos/foto18.jpg", cat: "tiernos", cap: "Mi amor" },
  { src: "fotos/foto19.jpg", cat: "romanticos", cap: "Nuestra historia" },
  { src: "fotos/foto20.jpg", cat: "besos", cap: "Bésame" },
  { src: "fotos/foto21.jpg", cat: "alegres", cap: "Aventura de amor" },
  { src: "fotos/foto22.jpg", cat: "tiernos", cap: "Contigo soy feliz" },
  { src: "fotos/foto23.jpg", cat: "romanticos", cap: "Mi vida" },
  { src: "fotos/foto24.jpg", cat: "besos", cap: "Mil besos" },
  { src: "fotos/foto25.jpg", cat: "alegres", cap: "Sonrisa tuya" },
  { src: "fotos/foto26.jpg", cat: "tiernos", cap: "Eres especial" },
  { src: "fotos/foto27.jpg", cat: "romanticos", cap: "Amor eterno" },
  { src: "fotos/foto28.jpg", cat: "besos", cap: "Para ti" },
  { src: "fotos/foto29.jpg", cat: "alegres", cap: "Día perfecto" },
  { src: "fotos/foto30.jpg", cat: "tiernos", cap: "Mi tesoro" },
  { src: "fotos/foto31.jpg", cat: "romanticos", cap: "Nuestro mundo" },
  { src: "fotos/foto32.jpg", cat: "besos", cap: "Con amor" },
  { src: "fotos/foto33.jpg", cat: "alegres", cap: "Juntos" },
  { src: "fotos/foto34.jpg", cat: "tiernos", cap: "Mi corazón late por ti" },
  { src: "fotos/foto35.jpg", cat: "romanticos", cap: "Siempre tú" },
  { src: "fotos/foto36.jpg", cat: "besos", cap: "Un beso de amor" },
  { src: "fotos/foto37.jpg", cat: "alegres", cap: "Recuerdo hermoso" },
  { src: "fotos/foto38.jpg", cat: "tiernos", cap: "Te amo infinito" },
];

// ─── MÚSICA ───
const musica = document.getElementById("musica");
const btnMusica = document.getElementById("musicaBtn");

musica.volume = 0.5;

function actualizarBtnMusica(reproduciendo) {
  if (reproduciendo) {
    btnMusica.classList.add("reproduciendo");
    btnMusica.textContent = "⏸";
  } else {
    btnMusica.classList.remove("reproduciendo");
    btnMusica.textContent = "🎵";
  }
}

function iniciarMusica() {
  musica.play().then(() => actualizarBtnMusica(true)).catch(() => {});
}

btnMusica.addEventListener("click", () => {
  if (musica.paused) {
    musica.play().then(() => actualizarBtnMusica(true)).catch(() => {});
  } else {
    musica.pause();
    actualizarBtnMusica(false);
  }
});

// ─── BIENVENIDA ───
const bienvenida = document.getElementById("bienvenida");
const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", () => {
  bienvenida.classList.add("oculta");
  iniciarMusica();
  if (typeof window.registrarVisita === "function") window.registrarVisita();
});

// ─── CONTADOR (pausado en 313 días) ───
const CONTADOR_PAUSADO = true;
const DIAS_PAUSA = 313;

const els = {
  dias: document.getElementById("dias"),
  horas: document.getElementById("horas"),
  minutos: document.getElementById("minutos"),
  segundos: document.getElementById("segundos"),
};

let prevVals = { dias: -1, horas: -1, minutos: -1, segundos: -1 };

function actualizarContador() {
  let dias, horas, minutos, segundos;

  if (CONTADOR_PAUSADO) {
    dias = DIAS_PAUSA;
    horas = 0;
    minutos = 0;
    segundos = 0;
  } else {
    const diff = new Date() - INICIO_RELACION;
    dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    minutos = Math.floor((diff / (1000 * 60)) % 60);
    segundos = Math.floor((diff / 1000) % 60);
  }

  const vals = { dias, horas, minutos, segundos };

  for (const key of Object.keys(vals)) {
    if (vals[key] !== prevVals[key]) {
      const el = els[key];
      el.textContent = String(vals[key]).padStart(2, "0");
      el.classList.remove("cambio");
      void el.offsetWidth;
      el.classList.add("cambio");
      prevVals[key] = vals[key];
    }
  }
}

actualizarContador();
if (!CONTADOR_PAUSADO) {
  setInterval(actualizarContador, 1000);
}

// ─── SOBRES ───
document.querySelectorAll(".envelope").forEach((sobre) => {
  sobre.addEventListener("click", () => {
    sobre.classList.toggle("abierto");
  });
});

// ─── INTERACTIVO ───
const MENSAJES = {
  triste: `Si estás leyendo esto en uno de esos días en los que sientes que todo pesa un poquito más, quiero que recuerdes que no tienes que poder con todo tú sola.

Respira, tómate tu tiempo y recuerda que eres muchísimo más fuerte de lo que a veces crees, eres increíble mi amor, no dejes de brillar nunca.💖✨

Ojalá pudiera estar ahí para abrazarte fuerte, acariciarte con un beso y decirte que todo va a estar bien.🫂❤️

Y aunque ahora no pueda hacerlo, quiero que estas palabras te recuerden que hay alguien que te ama muchísimo y que siempre desea verte tranquila y feliz.🤗💖

No olvides nunca cuánto vales, mi Janecita. ❤️`,

  extranias: `Yo también te extraño mucho mi amor.🥹

Más de lo que probablemente te digo.🥹

Extraño nuestras conversaciones, nuestras risas, tus mensajes, escuchar cómo estuvo tu día y hasta esas pequeñas cosas que quizá parecen insignificantes, pero que cuando no estás hacen falta.😓🫂

A veces no necesito que pase nada extraordinario para extrañarte.💖

Simplemente apareces en mi pensamiento.🤗

Y entonces sonrío porque recuerdo que tengo una historia contigo que quiero seguir escribiendo.🥹🫂`,

  fea: `Ven mami.

Quiero recordarte algo que quizá tú misma olvidas algunas veces:

no necesitas verte perfecta para ser hermosa.🥹

Me encanta tu sonrisa, tu mirada, tu forma de ser, tus gestos, tus ocurrencias y todas esas pequeñas cosas que te hacen ser tú.🫂

Pero hay algo que quiero que recuerdes todavía más:

tu valor no depende de cómo te veas frente a un espejo.💖😓

Eres hermosa por la persona que eres, por tu corazón, por la manera en que quieres y por todo lo que llevas dentro.🤗💖

Así que si algún día dudas de ti, recuerda que yo veo en ti muchísimo más de lo que tú alcanzas a ver algunas veces.🫂

Eres tan hermosa mi amor, tienes una sonrisa tan linda y una figura tan ufff, queee sexi.🤗😚👄`,

  amo: `No sé si exista una manera exacta de medir cuánto puede querer una persona a otra.

Pero sé que te amo en los días fáciles y también en los difíciles.🥹

Te amo cuando estamos riendo por cualquier tontería y cuando simplemente necesitamos estar en silencio.🥹

Te amo en los mensajes de buenos días, en los “buenas noches”, en nuestras conversaciones, en nuestras oraciones y en todos esos momentos que solamente nosotros entendemos.🫂

Te amo por quien eres y por todo lo que hemos construido juntos.🤗🙏

Y si tuviera que elegir una sola palabra para explicar lo que siento por ti, probablemente ninguna sería suficiente.

Así que simplemente te lo digo como sé:

Te amo, mi Janecita. Muchísimo. ❤️`,

  animo: `Si estás leyendo esto porque hoy no te sientes capaz, quiero que hagas una pausa y recuerdes todo lo que ya has superado.🥹

No tienes que resolver toda tu vida en un solo día.🥹

Puedes avanzar poquito a poquito mi corazón.🤗

Puedes descansar.

Puedes equivocarte.

Puedes volver a intentarlo.

Y puedes tener mucho miedo.🫂

Yo creo en ti, mi amor.🫂❤️

Creo en tus sueños, en tus capacidades y en la persona que eres.💖🤗

Así que no te rindas solamente porque hoy sea difícil.

Mañana puede sentirse diferente.

Y mientras tanto, recuerda que hay alguien aquí que está orgulloso de ti y que quiere verte graduada y cumpliendo todo aquello que sueñas.❤️`,

  beso: `Entonces cierra los ojos un momentito.🥹

Imagínate que estoy frente a ti, acercándome despacito, sonriendo porque sé perfectamente lo que estás esperando.

Primero un beso en la frente, luego uno en tus cachetitos todos rojos y lindos.😚❤️

Después un abrazo pero bien grandote mi amor, como siempre nos decimos.🥹🫂

Y finalmente...

un besote para mi Janecita. 😘❤️

Ahora sí puedes abrir los ojos, mi corazón bello.

Pero una cosa más:

ese beso quedó pendiente para la próxima vez que nos veamos.🥹🤗😚`,
};

const modal = document.getElementById("mensajeModal");
const mensajeTexto = document.getElementById("mensajeTexto");

document.querySelectorAll(".interactivo-btn").forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty("--x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    btn.style.setProperty("--y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  });

  btn.addEventListener("click", () => {
    const key = btn.dataset.msgKey;
    mensajeTexto.textContent = MENSAJES[key] || "";
    modal.classList.add("activo");
    crearConfeti(btn);
  });
});

document.querySelector(".mensaje-cerrar").addEventListener("click", () => {
  modal.classList.remove("activo");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("activo");
});

function crearConfeti(btn) {
  const rect = btn.getBoundingClientRect();
  const emojis = ["💕", "💖", "✨", "🌸", "💗"];
  for (let i = 0; i < 12; i++) {
    const c = document.createElement("div");
    c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    c.style.cssText = `
      position:fixed;
      left:${rect.left + rect.width / 2}px;
      top:${rect.top + rect.height / 2}px;
      font-size:${Math.random() * 16 + 12}px;
      pointer-events:none;
      z-index:9999;
      animation:confeti${i} 1.5s forwards;
    `;
    const angle = (Math.PI * 2 * i) / 12;
    const dist = 60 + Math.random() * 80;
    const style = document.createElement("style");
    style.textContent = `
      @keyframes confeti${i} {
        0% { opacity:1; transform:translate(0,0) scale(1); }
        100% { opacity:0; transform:translate(${Math.cos(angle) * dist}px,${Math.sin(angle) * dist}px) scale(0.5); }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(c);
    setTimeout(() => { c.remove(); style.remove(); }, 1500);
  }
}

// ─── GALERÍA ───
const galeria = document.getElementById("galeria");
let filtroActual = "todos";
let lightboxIndex = 0;
let fotosVisibles = [];

function renderGaleria() {
  galeria.innerHTML = "";
  fotosVisibles = FOTOS.filter(f => filtroActual === "todos" || f.cat === filtroActual);

  fotosVisibles.forEach((foto, i) => {
    const item = document.createElement("div");
    item.className = "galeria-item";
    item.dataset.index = i;
    item.innerHTML = `
      <img src="${foto.src}" alt="${foto.cap}" loading="lazy">
      <span class="item-caption">${foto.cap}</span>
    `;
    item.addEventListener("click", () => abrirLightbox(i));
    galeria.appendChild(item);
  });
}

document.querySelectorAll(".filtro-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("activo"));
    btn.classList.add("activo");
    filtroActual = btn.dataset.cat;
    renderGaleria();
  });
});

renderGaleria();

// ─── LIGHTBOX ───
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

function abrirLightbox(index) {
  lightboxIndex = index;
  const foto = fotosVisibles[index];
  lightboxImg.src = foto.src;
  lightboxCaption.textContent = foto.cap;
  lightbox.classList.add("activo");
}

function cerrarLightbox() {
  lightbox.classList.remove("activo");
}

document.querySelector(".lightbox-cerrar").addEventListener("click", cerrarLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) cerrarLightbox(); });

document.querySelector(".lightbox-prev").addEventListener("click", (e) => {
  e.stopPropagation();
  lightboxIndex = (lightboxIndex - 1 + fotosVisibles.length) % fotosVisibles.length;
  abrirLightbox(lightboxIndex);
});

document.querySelector(".lightbox-next").addEventListener("click", (e) => {
  e.stopPropagation();
  lightboxIndex = (lightboxIndex + 1) % fotosVisibles.length;
  abrirLightbox(lightboxIndex);
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("activo")) return;
  if (e.key === "Escape") cerrarLightbox();
  if (e.key === "ArrowLeft") document.querySelector(".lightbox-prev").click();
  if (e.key === "ArrowRight") document.querySelector(".lightbox-next").click();
});

// ─── SCROLL REVEAL ───
const revealEls = document.querySelectorAll(".reveal");
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

revealEls.forEach(el => revealObs.observe(el));

// ─── NAV ACTIVO ───
const secciones = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-flotante a");

window.addEventListener("scroll", () => {
  let current = "";
  secciones.forEach(sec => {
    const top = sec.offsetTop - 200;
    if (scrollY >= top) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("activo", link.getAttribute("href") === `#${current}`);
  });
});

// ─── PÉTALOS ───
const petalosEmojis = ["🌸", "🌺", "💮", "🩷", "✿"];
const corazonFotos = ["foto 1.jpg", "foto 4.jpg"];

function crearPetalo() {
  const p = document.createElement("div");
  p.classList.add("petalo");
  p.textContent = petalosEmojis[Math.floor(Math.random() * petalosEmojis.length)];
  p.style.left = Math.random() * 100 + "vw";
  p.style.fontSize = Math.random() * 18 + 10 + "px";
  p.style.animationDuration = Math.random() * 6 + 6 + "s";
  document.getElementById("petalos").appendChild(p);
  setTimeout(() => p.remove(), 12000);
}

function crearCorazonFoto() {
  const c = document.createElement("div");
  c.classList.add("corazon-foto");
  c.style.backgroundImage = `url("${corazonFotos[Math.floor(Math.random() * corazonFotos.length)]}")`;
  // Caen en orillas y también en el centro (toda la página)
  c.style.left = (Math.random() * 92 + 2) + "vw";
  const size = Math.random() * 18 + 40;
  c.style.width = size + "px";
  c.style.height = size + "px";
  c.style.animationDuration = (Math.random() * 5 + 7) + "s";
  document.getElementById("petalos").appendChild(c);
  setTimeout(() => c.remove(), 13000);
}

setInterval(crearPetalo, 600);
setInterval(crearCorazonFoto, 1800);

// ─── ESTRELLAS ───
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function initStars() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    size: Math.random() * 2 + 0.5,
    alpha: Math.random() * 0.5 + 0.2,
  }));
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(s => {
    s.x += s.vx;
    s.y += s.vy;
    if (s.x < 0) s.x = canvas.width;
    if (s.x > canvas.width) s.x = 0;
    if (s.y < 0) s.y = canvas.height;
    if (s.y > canvas.height) s.y = 0;

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 200, 220, ${s.alpha})`;
    ctx.fill();
  });

  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      const dx = stars[i].x - stars[j].x;
      const dy = stars[i].y - stars[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(stars[i].x, stars[i].y);
        ctx.lineTo(stars[j].x, stars[j].y);
        ctx.strokeStyle = `rgba(244, 143, 177, ${0.15 * (1 - dist / 100)})`;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawStars);
}

initStars();
drawStars();
window.addEventListener("resize", initStars);

// ─── CORAZONES AL CLICK ───
const corazones = ["💖", "💕", "💗", "💝", "❤️", "🩷"];

document.addEventListener("click", (e) => {
  if (e.target.closest("button, a, .galeria-item, .lightbox, .mensaje-modal, .bienvenida")) return;

  const heart = document.createElement("div");
  heart.classList.add("click-heart");
  heart.textContent = corazones[Math.floor(Math.random() * corazones.length)];
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
});
