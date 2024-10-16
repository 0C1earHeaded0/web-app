import pg from 'pg';
const getDownloadPage = async (req, response) => {
    if (Object.keys(req.query).length == 0) {
        response.render('downloadPage');
    }
    else if (Object.keys(req.query).length == 2) {
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
            if (err) console.log(err);
            else {
                response.send(res.rows);
            }
        })
    }
}

const download = async (app) => {
    app.get('/download', getDownloadPage);
}

export default download