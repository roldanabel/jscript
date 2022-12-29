
//PRODUCTOS

const cards = document.querySelectorAll(".card");
cards.forEach((card)=>{
  card.addEventListener("click", (e)=>{
    leerDatosProducto(e.target.parentElement);
  });
});

// Array vacío para guardar productos

let articulosCarrito = []

function leerDatosProducto(producto) {
  const infoProducto = {
    titulo: producto.querySelector(".card-title").textContent,
    texto: producto.querySelector(".card-text").textContent,
  };

  //console.log(infoProducto);


// Agregar elementos al carrito

articulosCarrito = [...articulosCarrito, infoProducto];

carritoHTML();

}

// Mostrar los productos en el carrito

const carrito = document.querySelector("#carrito");

function carritoHTML(){

limpiarHTML();

 articulosCarrito.forEach((producto)=>{
  const row = document.createElement("p")
  row.innerHTML=`
  <div class="container">
  <h5>${producto.titulo}</h5>
  <p>${producto.texto}</p>
  <button class="btn btn-danger">Eliminar</button> 
  </div>
  `;

  carrito.appendChild(row);
 })
}

function limpiarHTML() {
  carrito.innerHTML = "";
}


// Enviar OBJETO a JSON


const producto1 = {
  titulo: "iPhone13",
  capacidad: 100,
};

const aJson = JSON.stringify(producto1);


// guardar en LOCALSTORAGE

localStorage.setItem("producto1", aJson);

// bajar datos del LOCALSTORAGE 

const deJson = localStorage.getItem("producto1");

console.log(JSON.parse(deJson));



