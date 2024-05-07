const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const porcent = document.getElementById('porcent')
const granTotal = document.getElementById('granTotal')
const propina = document.getElementById('propina')

buttons.forEach(btn => {
    btn.addEventListener('click', () =>{
        if(btn.id === '='){
            display.value = eval(display.value);
        } else if ( btn.id === 'ac') {
            display.value = '';
        } else if (btn.id == 'de') {
            display.value = display.value.slice(0, -1);
    
        } else {
            display.value += btn.id
        }
    })
    
});
function tips(porcent, display) {
    let displayFloat = parseFloat(display)
    let porcentFloat = parseFloat(porcent)
    return displayFloat * porcentFloat / 100;
}

porcent.addEventListener("keyup",()=>{
    propina.value = tips(display.value,porcent.value)

    let propinaFloat = parseFloat(propina.value)

    let displayFloat = parseFloat(display.value)
    console.log(propinaFloat + displayFloat)
    granTotal.value = propinaFloat + displayFloat
    

        console.log(porcent.value)
    if(porcent.value <= 0){
        granTotal.value = 0
        propina.value = 0
    }


})
