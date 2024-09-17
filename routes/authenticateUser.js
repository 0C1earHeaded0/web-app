const checkPassword = async (req, res, next) => {
    if (req.body.pass == '12345') {
        res.sendStatus(200);
    }
    else {
        res.sendStatus(403);
    }
}

const authUser = async (app) => {
    app.post('/authentication', checkPassword);
}

export default authUser