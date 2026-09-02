// ─── CONFIGURACIÓN ───
const INICIO_RELACION = new Date("2025-11-28T00:00:00");
const FIN_RELACION = new Date("2026-09-02T00:00:00");

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
const musicaDueles = document.getElementById("musicaDueles");
const btnMusica = document.getElementById("musicaBtn");

musicaDueles.volume = 0.5;

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
  musicaDueles.play().then(() => actualizarBtnMusica(true)).catch(() => {});
}

btnMusica.addEventListener("click", () => {
  if (musicaDueles.paused) {
    musicaDueles.play().then(() => actualizarBtnMusica(true)).catch(() => {});
  } else {
    musicaDueles.pause();
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

// ─── CONTADOR ───
const els = {
  dias: document.getElementById("dias"),
  horas: document.getElementById("horas"),
  minutos: document.getElementById("minutos"),
  segundos: document.getElementById("segundos"),
};

function actualizarContador() {
  const diff = FIN_RELACION - INICIO_RELACION;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  els.dias.textContent = String(dias).padStart(2, "0");
  els.horas.textContent = String(horas).padStart(2, "0");
  els.minutos.textContent = String(minutos).padStart(2, "0");
  els.segundos.textContent = String(segundos).padStart(2, "0");
}

actualizarContador();

// ─── SOBRE ───
const sobre = document.getElementById("sobre");
sobre.addEventListener("click", () => {
  sobre.classList.toggle("abierto");
});

// ─── INTERACTIVO ───
const modal = document.getElementById("mensajeModal");
const mensajeTexto = document.getElementById("mensajeTexto");

document.querySelectorAll(".interactivo-btn").forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty("--x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    btn.style.setProperty("--y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  });

  btn.addEventListener("click", () => {
    mensajeTexto.textContent = btn.dataset.msg;
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

setInterval(crearPetalo, 600);

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
