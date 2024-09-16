const getMainPage = async (req, res) => {
    res.render('main');
}

const main = async (app) => {
    app.get('/', getMainPage);
}

export default main