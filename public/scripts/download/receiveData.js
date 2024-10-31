let receivedData;
const receiveData = async (e) => {
    document.querySelector('.prev').classList.add('hide');
    await fetch('/receiveData?' + new URLSearchParams({ date_from: document.getElementById('date_from').value, date_to: document.getElementById('date_to').value }).toString(), {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.querySelector('.err').classList.add('hide');
        if (data.length == 0) {
            document.querySelector('.err').classList.remove('hide');
            return;
        }
        preview(data);
    })
    .catch(error => console.error('Error:', error))
}

const preview = (receivedData) => {
    const data = receivedData;
    const table = document.querySelector('#table');
    document.querySelector('.prev').classList.remove('hide');
    const trs = document.querySelectorAll('tr');
    const headers = trs[0];
    trs.forEach(tr => {
        if (headers !== tr) tr.remove();
    });
    for (let i = 0; i < 5; i++) {
        const row = table.insertRow();
        const values = Object.values(data[i]);
        values.forEach(text => {
            const cell = row.insertCell();
            cell.textContent = text;
        });
    }
}

document.querySelector('.submit_btn').addEventListener('click', receiveData);