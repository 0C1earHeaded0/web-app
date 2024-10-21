import pg from 'pg';
const receiveData = async (req, response) => {
    if (req.query.date_from && req.query.date_to) {
        const date_from = req.query.date_from;
        const date_to = req.query.date_to;

        console.log(typeof(date_from), date_to);

        const client = new pg.Client({
            host: 'localhost',
            user: 'postgres',
            password: 'postgres',
            database: 'postgres',
            port: 5432,
        });

        client.connect()
        .then(() => console.log('Connected to PostgreSQL'))
        .catch(err => console.error('Connection error', err.stack));

        client.query(`SELECT * FROM public.characters WHERE created BETWEEN '${date_from}' AND '${date_to}'`, (err, res) => {
            if (err) console.log('Ошибка запроса: ' + err);
            else {
                response.status(200).json(res.rows);
            }
        })
    }
}

const receive = async (app) => {
    app.get('/receiveData', receiveData);
}

export default receive