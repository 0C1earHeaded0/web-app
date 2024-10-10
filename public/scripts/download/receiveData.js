const receiveData = (e) => {
    fetch('/download?' + new URLSearchParams({ date_from: document.getElementById('date_from').value, date_to: document.getElementById('date_to').value }).toString(), {
        method: 'GET',
    })
    .then(res => {
        if (res.ok) {
            window.location.href = '/download';
        }
    })
}

document.querySelector('.submit_btn').addEventListener('click', receiveData)