const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const point = document.querySelector('.point');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;


for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (isFirstValue === false){
            getFirstValue(atr)
        }
        if (isSecondValue === false){
            getSecondValue(atr)
        }
    })
}

function getFirstValue(el){
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el){
    if (firstValue != "" && sign != "" ){
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign(){
    for(let i=0 ; i<signs.length; i++){
        signs[i].addEventListener('click', (e) =>{
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}

getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if (sign === "+"){
        resultValue = firstValue + secondValue;
    }else if (sign === "-"){
        resultValue = firstValue - secondValue;
    }else if (sign === "x"){
        resultValue = firstValue * secondValue;
    }else if (sign === "/"){
        resultValue = firstValue / secondValue;
    // }else if (sign === "%"){
    //     if (firstValue != ""){
    //         resultValue = firstValue / 100;
    //     }else{
    //         resultValue = firstValue * (secondValue / 100);
    //     }
    }

    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";

    checkResultLenght();

})

function checkResultLenght(){
    resultValue = JSON.stringify(resultValue);

    if(resultValue.length >= 8){
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

point.addEventListener('click', () => {
    console.log(result.innerHTML = point.value);

})

negative.addEventListener('click', () => {
    result.innerHTML = "";

    if (sign === "") {
        // Si no hay operador, invertir el signo del primer valor
        firstValue = -Number(firstValue);
        resultValue = firstValue;
    } else {
        // Si hay operador, invertir el signo del segundo valor
        secondValue = -Number(secondValue);
        resultValue = secondValue;
    }

    result.innerHTML = resultValue;
});


percent.addEventListener('click', () => {
    result.innerHTML = "";

    if (firstValue != "" && secondValue === "") {
        // Si solo se ha ingresado el primer valor, 
        // calcular su porcentaje
        resultValue = Number(firstValue) / 100;
        firstValue = resultValue;
    } else if (firstValue != "" && secondValue != "") {
        // Si hay un segundo valor, calcular el 
        // porcentaje de firstValue aplicado a secondValue
        resultValue = Number(firstValue) * (Number(secondValue) / 100);
    } 
    result.innerHTML = resultValue + "%";
});



clear.addEventListener('click', () => {
    result.innerHTML = 0;

    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
})
