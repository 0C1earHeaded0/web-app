const checkPassword = async (req, res) => {
    res.send('OK' + req.body.pass);
}

const authUser = async (app) => {
    app.post('/authentication', checkPassword);
}

export default authUser