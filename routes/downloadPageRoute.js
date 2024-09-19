// import isAuth from "../models/isAuth.js";

const getDownloadPage = async (req, res) => {
    if (req.user) {
        res.render('downloadPage');
        // res.redirect('http://localhost:3000/download');
    }
    else
        return res
            .status(401)
            .json({ message: 'Not authorized' });
    
}

const download = async (app) => {
    app.get('/download', getDownloadPage);
}

export default download