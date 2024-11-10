import jwt from 'jsonwebtoken';
import users from '../users.json' with {type: 'json'};
import tokenKey from '../app.js';
const checkPassword = async (req, res, next) => {
    for (let user of users) {
        if (req.body.login === user.login && req.body.pass === user.password) {
            return res.status(200).json({
                id: user.id,
                email: user.login,
                token: jwt.sign({id: user.id}, tokenKey),
            });
        }
    }
    return res.status(404).json({message: 'User not found'});
}

const authUser = async (app) => {
    app.post('/authentication', checkPassword);
}

export default authUser