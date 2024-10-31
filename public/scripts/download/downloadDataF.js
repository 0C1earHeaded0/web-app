const downloadData = async (e) => {
    await fetch('/downloadData?' + new URLSearchParams({ date_from: document.getElementById('date_from').value, date_to: document.getElementById('date_to').value }).toString(), {
        method: 'GET',
    })
    .then(res => {
        if (res.ok) {
            window.location.href = '/downloadData?' + new URLSearchParams({ date_from: document.getElementById('date_from').value, date_to: document.getElementById('date_to').value }).toString();
        }
    })
    .catch(error => console.error('Error:', error))
}

document.querySelector('.download_btn').addEventListener('click', downloadData);