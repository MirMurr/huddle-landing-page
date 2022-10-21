const form = document.getElementById('form');
const email = document.getElementById('email');
const errorElement = document.getElementById('error-message');


form.addEventListener('submit', (e) => {
    let message = [];

    if (email.value === '' || email.value == null) {
        message.push('E-Mail Address is required');
    }

    if(message.length > 0) { 
        e.preventDefault()
        errorElement.innerHTML = message.join(', ');
    }
});

