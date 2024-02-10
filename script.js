
let emailAddress = document.getElementById('user__email');
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let invalidEmailMessage = document.getElementById('invalid__email');
let invalidInput = document.getElementById('user__email');
let signupStart = document.getElementById('main__container__start');
let signupSuccess =document.getElementById('main__container__success');


function ValidateEmail(){
    if(emailAddress.value.match(emailRegex)){

        invalidEmailMessage.classList.remove('displayOn');
        invalidInput.classList.remove('input__invalid');
        signupStart.classList.add('switchStates');
        console.log("Correct email");
        signupSuccess.classList.add('switchStatesOn');


    } else {

        console.log("Incorrect email");
        invalidEmailMessage.classList.add('displayOn');
        invalidInput.classList.add('input__invalid');
        signupStart.classList.remove('switchStates');
  
      
    }


}


function Dismiss(){
    signupSuccess.classList.remove('switchStatesOn');
    signupStart.classList.remove('switchStates');
    emailAddress.value = '';
}