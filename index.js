/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const valueEl = document.getElementById("value")
const convertEl = document.getElementById("convert")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

convertEl.addEventListener("click", function(){
    let value = valueEl.value
    calculLength(value)
    calculVolume(value)
    calculMass(value)
})

//----------------------------------------AFFICHAGE----------------------------------------

function calculLength(value){
    const coeff = 3.281
    let arrVal = calcul(value, coeff)
    
    lengthEl.textContent = value + " meters = " + arrVal[0] +" feet | " + value + " feet = " + arrVal[1] + " meters"
}

function calculVolume(value){
    const coeff = 0.264
    let arrVal = calcul(value, coeff)
    
    volumeEl.textContent = value + " liters = " + arrVal[0] +" gallons | " + value + " gallons = " + arrVal[1] + " liters"
}

function calculMass(value){
    const coeff = 2.204
    let arrVal = calcul(value, coeff)
    
    massEl.textContent = value + " kilos = " + arrVal[0] +" pounds | " + value + " pounds = " + arrVal[1] + " kilos"
}

//----------------------------------------CALCUL----------------------------------------

function calcul(value, coeff){
    return [(value * coeff).toFixed(3), (value * (1/coeff)).toFixed(3)]
}