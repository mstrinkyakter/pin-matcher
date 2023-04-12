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
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    // console.log(pin);
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

const typeNumberField = document.getElementById('typed-numbers');
document.getElementById('calculator').addEventListener('click',function(event){
    // console.log('numbers clicked');
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number === 'C'){
              typeNumberField.value = '';
        }
        console.log(number);
    }
    else{
       const previousTypedNumber = typeNumberField.value;
        const newTypedNumber = previousTypedNumber + number;
        typeNumberField.value = newTypedNumber;
    }
})