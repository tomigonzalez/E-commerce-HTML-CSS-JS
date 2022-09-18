const h2 = document.getElementById("nom");
const h4 = document.getElementById("costo");
const input = document.querySelector("input");
const botonEnviar = document.getElementById("enviar");
const conte = document.getElementById("contenedor");
const pizzas = [
  {
    id: 1,
    nombre: "Mozzarella",
    ingredientes: [
      
      "queso mozzarella",
      "orégano",
      "aceitunas",
    ],
    precio: 1200,
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
  },
  {
    id: 5,
    nombre: "Fugazzeta",
    ingredientes: ["Cebolla","queso mozzarella",],
    precio: 1600,
  },
  {
    id: 6,
    nombre: "Suprema",
    ingredientes: ["queso tybo", "cebolla", "panceta", "huevo"],
    precio: 1400,
  }
];
botonEnviar.addEventListener("click", enviarId);


//Muestro en pantalla
const renderPizza = (pizza) => {
  const { nombre, precio } = pizza; 
  h2.innerHTML = `<span class= "text-small">Nombre: </span>${nombre}`;
  
  h4.innerHTML = `<span class= "text-small">Precio: </span>${precio}`;
};

// creo la alerta
const mostrarAlerta = (mensaje) => {
 
  const existeAlerta = document.querySelector(".m-auto");
  if (!existeAlerta) {
   
    const divAlert = document.createElement("div");
    divAlert.classList.add("text-center", "m-auto");
    divAlert.innerHTML = `
    <p class="alert">${mensaje}</p>
    `;
    conte.appendChild(divAlert);
    
    setTimeout(() => {
      divAlert.remove();
    },6000);
  }
};
function enviarId(i) {
    i.preventDefault();
    const pizzaId = parseInt(input.value);
    
    if (!pizzaId) {
      mostrarAlerta("Tu id no cumple los requisitos (id del 1 al 6)");
      
      return;
    }
  
    if (pizzaId <= 0 || pizzaId > pizzas.length) {
      mostrarAlerta("Tu id no cumple los requisitos (id del 1 al 6)");
    
      return; 
    }
    
    const resultado = pizzas.find((pizza) => pizza.id === pizzaId);
    renderPizza(resultado); 
  }

