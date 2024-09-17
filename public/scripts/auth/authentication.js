const submitForm = (e) => {
    
    e.preventDefault();

    var pass = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    fetch('/authentication', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pass: pass, email: email })
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

document.querySelector('.auth-form').addEventListener('submit', submitForm);