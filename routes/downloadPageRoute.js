const getDownloadPage = async (req, res) => {
    res.render('downloadPage');
}

const download = async (app) => {
    app.get('/download', getDownloadPage);
}

export default download