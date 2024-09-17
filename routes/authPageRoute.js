const getAuthPage = async (req, res) => {
    res.render('AuthPage');
}

const auth = async (app) => {
    app.get('/auth', getAuthPage);
}

export default auth