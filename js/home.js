function pagPaginas() {
  document.getElementById("iframe").src="paginas.html";
 }
 function pagCapitulos() {
  document.getElementById("iframe").src="capitulos.html";
 }

 function home() {
  document.getElementById("iframe").src="home2.html";
 }
 function contacto() {
  document.getElementById("iframe").src="contactanos.html";
 }

 function pagDigital() {
  document.getElementById("iframe").src="digital.html";
 }
 function pagFisico() {
  document.getElementById("iframe").src="fisicos.html";
 }
function iconoMenuMasHorario() {
  document.getElementById("horario").style.display = "block";
  document.getElementById("mas").style.display = "none";
  document.getElementById("menos").style.display = "inline";
}
function iconoMenuMenosHorario() {
  document.getElementById("horario").style.display = "none";
  document.getElementById("mas").style.display = "inline";
  document.getElementById("menos").style.display = "none";
}
function iconoMenuMasCompra() {
  document.getElementById("compra").style.display = "block";
  document.getElementById("mas1").style.display = "none";
  document.getElementById("menos1").style.display = "inline";
}
function iconoMenuMenosCompra() {
  document.getElementById("compra").style.display = "none";
  document.getElementById("mas1").style.display = "inline";
  document.getElementById("menos1").style.display = "none";
}
function blog1() {
  document.getElementById("iframe").src="la_magia_de_la_lectura.html";
  document.getElementById("globo").style.display="block";
  
var elem = document.getElementById("globo");   
var  bot= 10;
var  to=800;
var id = setInterval(frame, 5);
function frame() {
  if (bot == 800 & to<0) {
    clearInterval(id);
    elem.style.display ="none";
  } else {
    bot++; 
    to--;
    elem.style.display ="block";
    elem.style.top= to + "px"; 
    elem.style.bottom = bot + "px"; 
  }
}
}

function blog2() {
  document.getElementById("iframe").src="leer_nos_cambia_el_cerebro.html";
  document.getElementById("globo").style.display="block";
  var elem = document.getElementById("globo");   
  var  bot= 10;
  var  to=800;
  var id = setInterval(frame, 5);
  function frame() {
    if (bot == 800 & to<0) {
      clearInterval(id);
      elem.style.display ="none";
    } else {
      bot++; 
      to--;
      elem.style.display ="block";
      elem.style.top= to + "px"; 
      elem.style.bottom = bot + "px"; 
    }
  }
}

function blog3() {
  document.getElementById("iframe").src="las_cronicas_de_un_libro.html";
  document.getElementById("globo").style.display="block";
  var elem = document.getElementById("globo");   
  var  bot= 10;
  var  to=500;
  var id = setInterval(frame, 5);
  function frame() {
    if (bot == 500 & to<0) {
      clearInterval(id);
      elem.style.display ="none";
    } else {
      bot++; 
      to--;
      elem.style.display ="block";
      elem.style.top= to + "px"; 
      elem.style.bottom = bot + "px"; 
    }
  }
}

function blog4() {
  document.getElementById("iframe").src="luchemos_contra_la_ignorancia.html";
  document.getElementById("globo").style.display="block";
  var elem = document.getElementById("globo");   
  var  bot= 10;
  var  to=800;
  var id = setInterval(frame, 5);
  function frame() {
    if (bot == 800 & to<0) {
      clearInterval(id);
      elem.style.display ="none";
    } else {
      bot++; 
      to--;
      elem.style.display ="block";
      elem.style.top= to + "px"; 
      elem.style.bottom = bot + "px"; 
    }
  }
}