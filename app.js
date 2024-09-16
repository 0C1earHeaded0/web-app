import express from 'express';
import bodyParser from 'body-parser';
import Router from './routes/index.js';

const app = express();

Router(app);

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.use(express.static('views/site'));
app.use(express.static('public'));
app.use(express.static('scripts'));

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});