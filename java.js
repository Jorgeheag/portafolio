const iconoMenu = document.querySelector("#icono-menu"),
  menu = document.querySelector("#menu");

iconoMenu.addEventListener("click", (e) => {
  // Alternamos estilos para el menu y body
  menu.classList.toggle("active");
  document.body.classList.toggle("opacity");

  // Alternamos su atributo 'src' para el ícono del menú
  const rutaActual = e.target.getAttribute("src");

  if (rutaActual == "img/open-menu.png") {
    e.target.setAttribute("src", "img/open-menu2.png");
  } else {
    e.target.setAttribute("src", "img/open-menu.png");
  }
});






function convertirACamelCase(cadena) {
  // dividimos la cadena por los guiones
  let palabras = cadena.split('-');
  
  // convertimos la primera palabra a minúsculas
  let primeraPalabra = palabras[0].toLowerCase();
  
  // convertimos las demás palabras a camelCase
  for (let i = 1; i < palabras.length; i++) {
    let primeraLetra = palabras[i][0].toUpperCase();
    let restoPalabra = palabras[i].slice(1).toLowerCase();
    primeraPalabra += primeraLetra + restoPalabra;
  }
  
  return primeraPalabra;
}