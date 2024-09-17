import main from "./mainPageRoute.js";
import auth from "./authPageRoute.js";
import download from "./downloadPageRoute.js";
import authUser from "./authenticateUser.js";

const Router = (app) => {
    main(app);
    auth(app);
    download(app);
    authUser(app);
}

export default Router