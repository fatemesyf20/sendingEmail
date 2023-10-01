// variables
const sendBtn = document.querySelector('#sendBtn')
const email = document.querySelector('#email'),
    subject = document.querySelector('#subject'),
    message = document.querySelector('#message'),
    resetBtn = document.querySelector('#resetBtn'),
    form = document.querySelector('#email-form')


//event listeners
evenListeners()
function evenListeners(){
    // first disabled send btn
    document.addEventListener('DOMContentLoaded' , appInit)
    email.addEventListener('blur' , validateField)
    subject.addEventListener('blur' , validateField)
    message.addEventListener('blur' , validateField)
    resetBtn.addEventListener('click' , resetFields)
    form.addEventListener('submit' , submitForm)
}


// functions

function appInit(){
    
    sendBtn.disabled = true
    resetBtn.disabled = true
}

function submitForm(e){
    e.preventDefault()
    const spinner = document.getElementById('spinner')
    spinner.style.display = 'block'
    const mailSender = document.createElement('img')
    mailSender.src = './img/mail.gif'
    mailSender.style.display = 'block'

    setTimeout(function(){
        spinner.style.display = 'none'
        const loaders = document.querySelector('#loaders')
        loaders.appendChild(mailSender)

        setTimeout(function(){
            mailSender.style.display = 'none'
            resetFields()
        } , 3000)

   }, 2000)
   
}

function validateField(){
    validateLength(this)

    if (this.type === 'email') {
        
        validateEmail(this)
    }

    let error = document.querySelectorAll('.error')
    if (email.value !== '' && subject.value !== '' && message.value !== '' ) {
        if (error.length === 0) {
            sendBtn.disabled = false
        }
    }
}

function validateLength(field){
if (field.value.length > 0) {
    field.style.borderBottomColor = 'rgb(17, 197, 17)'
    field.classList.remove('error')
    resetBtn.disabled = false
} else {
    field.style.borderBottomColor = 'rgb(197, 17, 17)'
    field.classList.add('error')
}}


function validateEmail(field){
    if (field.value.includes('@')) {
        field.style.borderBottomColor = 'rgb(17, 197, 17)'
        field.classList.remove('error')
    } else{
        field.style.borderBottomColor = 'rgb(197, 17, 17)'
        field.classList.add('error')
    }

    
}

function resetFields(){
  form.reset()
}
