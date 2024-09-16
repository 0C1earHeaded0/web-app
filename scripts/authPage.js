// const toAuth = () => {
//     fetch('http://localhost:3000/auth')
//     .then(response => console.log(response));
// }

const toAuth = async () => {
    const response = (await fetch('http://localhost:3000/auth', {method: 'GET'}));
    console.log(response);
}

// const response = await fetch('http://localhost:3000/auth', {method: 'GET'});

// console.log(response);

document.getElementById('auth').addEventListener('click', toAuth);