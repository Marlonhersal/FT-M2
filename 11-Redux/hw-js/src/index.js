const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador)

// Obtenemos el elemento con el id `valor`.
var valor = document.querySelector("#valor");

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.

function renderContador() {

  // Obtenemos la propiedad 'contador' de nuestro store:
  let nuevoValor = store.getState()
  
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  if(nuevoValor){
    valor.innerHTML = nuevoValor.contador;
  } 
  

}

// Ejecutamos la funcion 'renderContador':
renderContador()



// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(()=>{
  renderContador()
});



// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
let incrementarButton = document.querySelector("#incremento")
let decrementarButton = document.querySelector("#decremento")
let incrementarImpar = document.querySelector("#incrementoImpar")
let incrementoAsync = document.querySelector("#incrementoAsync")

incrementarButton.addEventListener("click",
()=>{
  store.dispatch(incremento())
}
)
decrementarButton.addEventListener("click",
()=>{
  store.dispatch(decremento())
}
)

incrementarImpar.addEventListener("click",
()=>{
  let nuevoValor = store.getState()
  if((nuevoValor.contador % 2) == 0)
  {
    store.dispatch(incremento())
  }
}
)

incrementoAsync.addEventListener("click",
()=>{
  setTimeout(()=>{store.dispatch(incremento())},3000)
  
}
)

