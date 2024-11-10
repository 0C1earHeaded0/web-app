import express from 'express';
import bodyParser from 'body-parser';
import RouterWOAuth from './routes/indexWOAuth.js';
import RouterAuthOnly from './routes/indexAuthOnly.js';
import expressCors from 'express-cors';
import jwt from 'jsonwebtoken';
import users from './users.json' with {type: 'json'};
import cookieParser from 'cookie-parser';

const app = express();

const tokenKey = 'secret';

app.use(bodyParser.json());

app.use(cookieParser());

app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('public/style'));
app.use(express.static('public/scripts/auth'));
app.use(express.static('public/scripts/download'));
app.use(express.static('public/scripts'));
app.use(express.static('plugins/jput/js'));

RouterWOAuth(app);

app.use((req, res, next) => {
    if (req.cookies.token !== undefined) {
        jwt.verify(req.cookies.token, tokenKey, (err, payload) => {
                if (err) 
                    res.status(404).json({message: 'Not Auth'});
                else if (payload) {
                    for (let user of users) {
                        if (user.id === payload.id) {
                            next();
                        }
                    }
                }
            }
        );
    }
    // res.redirect('/auth');
});

RouterAuthOnly(app);

// Middleware
app.set('view engine', 'ejs');

app.use(expressCors({
    origin: '*'
}))



// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

export default tokenKey;