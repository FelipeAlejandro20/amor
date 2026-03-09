// MUSICA

const musica=document.getElementById("musica")
const btn=document.getElementById("musicaBtn")

btn.onclick=()=>{

if(musica.paused){

musica.play()
btn.innerHTML="⏸"

}else{

musica.pause()
btn.innerHTML="🎵"

}

}


// CONTADOR

const inicio=new Date("2025-11-28")

function actualizarTiempo(){

const ahora=new Date()
const diff=ahora-inicio

const dias=Math.floor(diff/(1000*60*60*24))

document.getElementById("tiempo").innerHTML=dias+" días"

}

setInterval(actualizarTiempo,60000)
actualizarTiempo()




// PETALOS

function crearPetalo(){

const p=document.createElement("div")

p.classList.add("petalo")

p.innerHTML="🌸"

p.style.left=Math.random()*100+"vw"

p.style.fontSize=(Math.random()*20+10)+"px"

p.style.animationDuration=(Math.random()*5+5)+"s"

document.getElementById("petalos").appendChild(p)

setTimeout(()=>p.remove(),9000)

}

setInterval(crearPetalo,400)


// ESTRELLAS QUE SE CONECTAN

const canvas=document.getElementById("stars")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]

for(let i=0;i<80;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

stars.forEach(s=>{

ctx.beginPath()
ctx.arc(s.x,s.y,2,0,Math.PI*2)
ctx.fillStyle="white"
ctx.fill()

})

for(let i=0;i<stars.length;i++){

for(let j=i+1;j<stars.length;j++){

let dx=stars[i].x-stars[j].x
let dy=stars[i].y-stars[j].y

let dist=Math.sqrt(dx*dx+dy*dy)

if(dist<120){

ctx.beginPath()
ctx.moveTo(stars[i].x,stars[i].y)
ctx.lineTo(stars[j].x,stars[j].y)
ctx.strokeStyle="rgba(255,255,255,0.2)"
ctx.stroke()

}

}

}

requestAnimationFrame(draw)

}

draw()



// CORAZONES AL TOCAR

document.addEventListener("click",(e)=>{

let heart=document.createElement("div")

heart.innerHTML="💖"

heart.style.position="fixed"
heart.style.left=e.clientX+"px"
heart.style.top=e.clientY+"px"
heart.style.fontSize="20px"

heart.style.animation="float 2s forwards"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),2000)

})