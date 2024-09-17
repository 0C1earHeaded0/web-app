import express from 'express';
import bodyParser from 'body-parser';
import Router from './routes/index.js';

const app = express();

Router(app);

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.use(express.static('views'));
app.use(express.static('public/style'));
app.use(express.static('public/scripts/auth'));
app.use(express.static('public/scripts'));

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});