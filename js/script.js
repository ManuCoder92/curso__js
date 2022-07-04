//  let simonDice = prompt ("Ingrese una palabra")

// while (simonDice != "ESC") {
//    alert ("Simon dice"+ " "+ simonDice);
//   simonDice = prompt ('Agregue otra palabra o escriba "ESC" para finalizar')
//    }



// let num1 = parent("Ingrese cuantos pesos desea que le prestemos")

// let num2 = function (num1) 
//   if num1 >= 50000 


// const = (num1,num2) => num1 * num2


//Arrancamos pidiendole el nombre al usuario y guardandolo en una variable



// Primero establecemos una función para guardar el nombre de nuestro cliente y darle la bienvenida. Aqui incorporamos uno de los primeros conseptos, guardamos una variable y la concatenamos
function saludar () {
  let nombre = prompt ("Por favor ingrese su nombre ")
  alert("Bienvenido al bar de Moe"+" "+nombre+" "+".A continuación tendrá nuestro catálogo de bebidas")
}

saludar()

// Despues creamos una funcion que muestre las opciones para beber, usando el metodo console.log para mostrar en pantalla las opciones de bebidas
function catalogo () {
  let bebida1 = "1)Cerveza Duff: $4"
  let bebida2 = "2)LLamarada Moe: $6"
  let bebida3 = "3)Ciruela flotando en perfume en un sombrero de hombre: $10"
  console.log (bebida1)
  console.log (bebida2)
  console.log (bebida3)
}

catalogo()


/* Por último utilizamos un ciclo switch case para explorar las diferentes ramas que se abren. 
Con la elección de cada bebida se, muestra el precio y da por finalizado el ciclo.
Podría haber utilizado para el control del flujo condicionales if, else if o while
pero al haber tantas posibilidades el switch me pareció la opción más correcta 
(de ser una mala practica por favor corregirmelo jajaja)*/


function pedido () {
  let pedido = parseFloat(prompt("Seleccione el numero de la bebida que desea. 1)Cerveza 2)Llamarada Moe 3)Ciruela flotando en perfume"))
  switch (pedido) {
    case 1: 
    alert ("Su cerveza está en camino, serían $4");
    break;
    case 2:
      alert ("Una llamarada Moe para su majestad. Serían $6");
      break;
    case 3: 
    alert ("Ulala, señor frances. Ya se la preparo. Son $10");
    break;
    default: 
    alert ("No se lo que me pediste pero no lo tengo");
    break;

  }
}
 
pedido()

