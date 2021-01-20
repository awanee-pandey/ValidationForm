const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const btn = document.getElementById('btn');
const inputArr = [userName,email,password,confirmPassword];

function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

/* Check Input length */
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

/* Check Email is valid */
function checkEmail(input){
  const email= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

/* check password matching or not */
const checkPassword= function(input1,input2){
  if(input1.value !==input2.value){
    showError(input2,'password do not match');
  }
}

/* Get Field Name */
const getFieldName = (input)=> {
  return input.id[0].toUpperCase() + input.id.slice(1);
}

/* Check Required fields */
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    if(input.value.trim()===''){
      showError(input,`${getFieldName(input)} is required`)
    }else{
      showSuccess(input);
    }
  })
}

/* Event Listener */
form.addEventListener('submit',function(e){
  e.preventDefault();

 checkRequired([...inputArr]);
 checkLength(username,3,15);
 checkLength(password,6,25)
 checkEmail(email);
 checkPassword(password,confirmPassword);
})

