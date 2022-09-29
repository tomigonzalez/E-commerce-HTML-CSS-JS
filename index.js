

const pizzas= [
  {
    id: 1,
    nombre: "Mozzarella",
    ingredientes: [
      
      "queso mozzarella",
      "orégano",
      "aceitunas",
    ],
    precio: 1200,
    imagen: 'img/pngegg (1).png',

  },
  {
    id: 2,
    nombre: "Napolitana",
    ingredientes: [
     
      "queso mozzarella",
      "albahaca",
      "aceite de oliva",
    ],
    precio: 1400,
    imagen: 'img/pngegg.png',

  },
  
  {
    id: 3,
    nombre: "Cuatro Quesos",
    ingredientes: [
    
      "queso mozzarella",
      "queso tybo",
      "queso chedar",
      "queso parmesano",
    ],
    precio: 1900,
    imagen: 'img/pngegg (2).png',

  },
  {
    id: 4,
    nombre: "Especial",
    ingredientes: [
     
      "queso mozzarella",
      "jamón",
      "huevo",
      "morrones",
      "aceitunas",
    ],
    precio: 1500,
    imagen: 'img/pngegg (3).png',

  },
  {
    id: 5,
    nombre: "Fugazzeta",
    ingredientes: ["Cebolla ","queso mozzarella ",],
    precio: 1600,
    imagen: 'img/pngegg (5).png',
}
  
 , {
    id: 6,
    nombre: "Suprema",
    ingredientes: ["queso tybo", "cebolla", "panceta", "huevo"],
    precio: 1400,
    imagen: 'img/pngegg (4).png',
}
  
];

window.onload = (e) => {
  let precioPizza = document.getElementById('precioPizza');
  let nombrePizza = document.getElementById('nombrePizza');
  let ingredientesPizza = document.getElementById('ingredientesPizza');
  let imgPizza = document.getElementById('imgPizza');
 

  if (localStorage.length > 0) {
      precioPizza.textContent = localStorage.getItem("precioPizza");

      nombrePizza.textContent = localStorage.getItem("nombrePizza");

      ingredientesPizza.textContent = localStorage.getItem("ingredientesPizza");

      imgPizza.setAttribute('src', localStorage.getItem('imagenPizza'));
  } else {
      imgPizza.setAttribute('src', 'img/pngegg (6).png');
  }
};


let listado = document.getElementById('listadoPizzas');

const buscarPizza = () => {
  let valueid = document.getElementById('valueId').value;
  let precioPizza = document.getElementById('precioPizza');
  let nombrePizza = document.getElementById('nombrePizza');
  let ingredientesPizza = document.getElementById('ingredientesPizza');
  let inputVacio = document.getElementById('inputVacio');
  let imgPizza = document.getElementById('imgPizza');
  inputVacio.textContent = "";
  precioPizza.textContent = "";
  nombrePizza.textContent = "";
  ingredientesPizza.textContent = "";
  imgPizza.setAttribute('src', 'img/pngegg (6).png');

  

  let found = pizzas.find(function(post, i) {
      inputVacio.textContent = ""
      if (post.id == valueid) {
          precioPizza.textContent = post.precio;
          localStorage.setItem("precioPizza", post.precio);

          nombrePizza.textContent = post.nombre;
          localStorage.setItem("nombrePizza", post.nombre);

          ingredientesPizza.textContent = post.ingredientes.join(", ");
          localStorage.setItem("ingredientesPizza", post.ingredientes);
          
          imgPizza.setAttribute('src', post.imagen);
          localStorage.setItem("imagenPizza", post.imagen);
          return true;
      }
  });

  if (found == undefined) return inputVacio.textContent = "El codigo ingresado es incorrecto."
  if (valueid === "") return inputVacio.textContent = "Debes ingresar un valor numerico."


}