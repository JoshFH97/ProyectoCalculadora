const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const porcent = document.getElementById('porcent')
const granTotal = document.getElementById('granTotal')
const propina = document.getElementById('propina')
const compra = document.getElementById('producto')
//se le de click al numero 
 buttons.forEach(boton => {/*esto es para darle apellido (boton) y que todo con el  mismo apellido tenga la misma fx*/ 
     boton.addEventListener('click', () => {
         //para que se vea la pantalla
         const pantalla = boton.id;
         display.value += pantalla;

//para que delete fx y se borre un espacio.

        console.log(boton.id)
         if (boton.id == 'de') {
            display.value = display.value.slice(0, -3)
            
         }

// para ac tenga fx y se ponga la pantalla vacia.
         if (boton.id == 'ac') {
            display.value = '';
         }


         console.log(pantalla)
     })
 })




/*para que sirva el = le quite el id al boton y le di una fx onclick, 
llame la fx en js y le dije que el valor va a ser el contenido del display por medio del 'eval'*/
 function calcular() {
    let resultado = display.value;
    display.value = eval(resultado)

     console.log(compra.innerText)
     compra.value=display.value   
     
 }
 
 function tips(porcent, display) {
    let displayFloat = parseFloat(display)
    let porcentFloat = parseFloat(porcent)
    return displayFloat * porcentFloat / 100;
}


porcent.addEventListener("keyup", () => {
    propina.value = tips(display.value, porcent.value)

    let propinaFloat = parseFloat(propina.value)
    
    let displayFloat = parseFloat(display.value)
    console.log(propinaFloat + displayFloat)
    granTotal.value = propinaFloat + displayFloat
    
    if (porcent.value <= 0) {
        granTotal.value = display.value
        propina.value = 0
    }
    
    
})

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var tikect = document.getElementsByClassName('proforma');

let modalTotalH3 = document.getElementById("montoTotalModal")
let modalPorcent = document.getElementById('montoPorcentajeModal')
let modalPropina = document.getElementById('montoPropinaModal')
let modalCompra = document.getElementById('montoCompraModal')

// muentra el modal y que contenido se va a mostrar en el "tiquete".
function boton() {
    modal.style.display = 'block';
    modalTotalH3.innerHTML="El monto total es:" + " "+granTotal.value;
    modalPorcent.innerHTML='Porcentage:'+''+ porcent.value;
    modalPropina.innerHTML = 'Propina:'+ ''+ propina.value;
    modalCompra.innerHTML = 'Compra:'+''+ compra.value;
}



// click en la x para cerrar el modal.
span.onclick = function() {
  modal.style.display = "none";
}

// click en la parte gris para cerrar el modal.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
