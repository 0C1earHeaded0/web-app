import express from 'express';
import bodyParser from 'body-parser';
import RouterWOAuth from './routes/indexWOAuth.js';
import RouterAuthOnly from './routes/indexAuthOnly.js';
import expressCors from 'express-cors';
import jwt from 'jsonwebtoken';
import users from './users.json' assert {type: 'json'};

const app = express();

const tokenKey = 'secret';

app.use(bodyParser.json());

RouterWOAuth(app);

app.use((req, res, next) => {
    if (req.headers.authorization) {
        jwt.verify(
            req.headers.authorization.split(' ')[1],
            tokenKey,
            (err, payload) => {
                if (err) next();
                else if (payload) {
                    for (let user of users) {
                        if (user.id === payload.id) {
                            req.user = user;
                            // next();
                        }
                    }

                    if (!req.user) {
                        next();
                    }
                }
            }
        );
    }
    next();
});

RouterAuthOnly(app);

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

export default tokenKey;