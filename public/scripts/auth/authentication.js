const submitForm = async (e) => {

    e.preventDefault();

    const error = document.querySelector('#error');
    error.classList.add('hide');

    var pass = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    let response = await fetch('/authentication', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pass: pass, login: email })
    }).then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
    });

    const token = response.token;

    let res = await fetch('/download', {
        method: 'GET',
        headers: {
            'authorization': "token: " + token
        },
        user: {
            "id": response.id,
            "login": response.email
        }
    })

    if (res.ok) {
        window.location.replace('/download');
    } else {
        error.classList.remove('hide');
    }
}

document.querySelector('.auth-form').addEventListener('submit', submitForm);