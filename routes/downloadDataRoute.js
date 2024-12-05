import pg from 'pg';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import { convertCsvToXlsx } from '@aternus/csv-to-xlsx';
import { json2csv } from 'json-2-csv';
const downloadData = async (req, response) => {
    if (req.query.date_from && req.query.date_to) {
        const date_from = req.query.date_from;
        const date_to = req.query.date_to;

        console.log(typeof(date_from), date_from);

        const client = new pg.Client({
            host: process.env.POSTGRES_HOST,
            user: 'postgres',
            password: process.env.POSTGRES_PASSWORD,
            database: 'postgres',
            port: process.env.POSTGRES_PORT,
        });

        client.connect()
        .then(() => console.log('Connected to PostgreSQL'))
        .catch(err => console.error('Connection error', err.stack));

        client.query(`SELECT id, name, status, species, type, gender, image, url, created::date::varchar, origin_name, location_name FROM public.characters WHERE created BETWEEN '${date_from}' AND '${date_to}'`, (err, res) => {
            if (err) { 
                console.log('Ошибка запроса: ' + err);
                response.status(500).send(err);
            }
            else {
                console.log("Начало json - csv");
                fs.writeFileSync('data.csv', json2csv(res.rows, {
                    delimiter: {
                        field: ','
                    }
                }), (err) => {
                    console.log(err);
                });
                const __filename = fileURLToPath(import.meta.url);
                const __dirname = dirname(__filename);
                convertCsvToXlsx(path.join(__dirname, '..//data.csv'), path.join(__dirname, '..//data.xlsx'), {overwrite: "true", sheetName: "characters"});
                response.download(path.join(__dirname, '..//data.xlsx'));
            }
        })
    }
}

const downloadD = async (app) => {
    app.get('/downloadData', downloadData);
}

export default downloadD