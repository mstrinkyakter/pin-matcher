function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*1000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    // console.log(pin);
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})