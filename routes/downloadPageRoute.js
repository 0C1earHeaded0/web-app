const getDownloadPage = async (req, response) => {
    if (Object.keys(req.query).length == 0) {
        response.render('downloadPage');
    }
    else if (Object.keys(req.query).length == 2) {
        console.log("success");
    }
}

const download = async (app) => {
    app.get('/download', getDownloadPage);
}

export default download