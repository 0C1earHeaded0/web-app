const getAuthPage = async (req, res) => {
    //console.log("req: ",req);
    res.render('AuthPage');
}

const auth = async (app) => {
    app.get('/auth', getAuthPage);
}

export default auth