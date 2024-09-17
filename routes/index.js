import main from "./mainPageRoute.js";
import auth from "./authPageRoute.js";
import authUser from "./authenticateUser.js";
import download from "./downloadPageRoute.js";

const RouterWOAuth = (app) => {
    main(app);
    auth(app);
    authUser(app);
    download(app);
}

export default RouterWOAuth