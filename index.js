const form = document.getElementById('form')
const success_msg = document.getElementById('success-msg')
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const email = document.getElementById('email')
const query = document.getElementById('query')
const genQuery = document.getElementById('genquery')
const supQuery = document.getElementById('supquery')
const message = document.getElementById('msgtxt')
const checkbox = document.getElementById('checkbox')
const check = document.getElementById('check')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    
    inputCheck();
    let error =  inputCheck();

    if(error > 0){
        inputCheck();
    }else{
        success_msg.classList.remove('hidden')

        setTimeout(() => {
            success_msg.classList.add('hidden')
        }, 4000);
    }
})

function inputCheck(){
    const firstNameValue = firstName.value
    const lastNameValue = lastName.value
    const emailValue = email.value
    const messageValue = message.value
    const emailCheck = /^\S+@\S+\.\S+$/g

    let isError = 0;

    if(firstNameValue === '' || firstNameValue === null){
        setError(firstName, 'This field is required');
        isError = 1
    }else{
        success(firstName)
    }

    if(lastNameValue === ''|| lastNameValue === null){
        setError(lastName, 'This field is required')
        isError = 1
    }else{
        success(lastName)
    }

    if(emailValue === ''|| emailValue === null){
        setError(email, 'This field is required')
        isError = 1
    }else if(!emailCheck.test(emailValue)){
        setEmailError(email, 'Please enter a valid email address')
        isError = 1
    }else{
        success(email)
    }

    if(!genQuery.checked && !supQuery.checked){
        setErrorQuery();
        isError = 1
    }else if(genQuery.checked || supQuery.checked){
        successQuery();
    }

    if(messageValue === '' || messageValue === null){
        setErrorMessage(message, 'This field is required')
        isError = 1
    }else{
        successMessage(message)
    }

    if(!check.checked){
        checkboxError('To submit this form, please consent to being contacted')
        isError = 1
    }else{
        checkboxSuccess();
    }

    return isError
}

function setError(input, message){
    const formInput = input.parentElement;
    const span = formInput.querySelector('span')
    span.innerText = message

    formInput.className = 'user-fistname user-lastname error'
}

function success(input){
    const formInput = input.parentElement;
    const span = formInput.querySelector('span')
    formInput.className = 'user-fistname user-lastname'

    span.innerText = ''
}

function setEmailError(input, message){
    const formInput = input.parentElement;
    const span = formInput.querySelector('span')
    formInput.className = 'user-email error'

    span.innerText = message
}

function setErrorQuery(){
    const query = document.getElementById('query')
    const span = query.querySelector('span')
    span.innerText = 'Please select a query type'
}

function successQuery(){
    const query = document.getElementById('query')
    const span = query.querySelector('span')
    span.innerText = ''
}

function setErrorMessage(input, message){
    const formInput = input.parentElement;
    const span = formInput.querySelector('span')
    formInput.className = 'msg error'

    span.innerText = message
}

function successMessage(input){
    const formInput = input.parentElement;
    const span = formInput.querySelector('span')
    span.innerText = ''
    formInput.className = 'msg'
}

function checkboxError(message){
    const span = checkbox.querySelector('span')
    span.innerText = message
    checkbox.className = 'ccontainer error'
}

function checkboxSuccess(){
    const span = checkbox.querySelector('span')
    span.innerText = ''
}