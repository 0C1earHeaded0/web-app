import express from 'express';
import bodyParser from 'body-parser';
import RouterWOAuth from './routes/index.js';
import expressCors from 'express-cors';

const app = express();

app.use(bodyParser.json());

RouterWOAuth(app);

// Middleware
app.set('view engine', 'ejs');

app.use(expressCors({
    origin: '*'
}))

app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('public/style'));
app.use(express.static('public/scripts/auth'));
app.use(express.static('public/scripts'));



// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});