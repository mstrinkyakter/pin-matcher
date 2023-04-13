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
    const previousTypedNumber = typeNumberField.value;

    if(isNaN(number)){
        if(number === 'C'){
              typeNumberField.value = '';
        }
        // console.log(number);
    }
    else if (number === '<'){
        // console.log(previousTypedNumber);
        const digits = previousTypedNumber.split('');
        digits.pop();
        const remainingDigits = digits.join('');
        typeNumberField.value = remainingDigits;
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typeNumberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    // console.log('verify button clicked');
    const displayPinField = document.getElementById('display-pin');
    const currentPin= displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const successPin = document.getElementById('pin-success');
    const failurePin = document.getElementById('pin-failure');

    if(typedNumber === currentPin){
        
        successPin.style.display = 'block';
        failurePin.style.display = 'none';
    }
    else{
      
        failurePin.style.display = 'block';
        successPin.style.display = 'none'
    }
})