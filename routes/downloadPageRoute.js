const getDownloadPage = async (req, res) => {
    if (req.user) {
        res.render('downloadPage');
    }
    else
        res.redirect('/auth');
}

const download = async (app) => {
    app.get('/download', getDownloadPage);
}

export default download