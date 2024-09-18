import main from "./mainPageRoute.js";
import auth from "./authPageRoute.js";
import authUser from "./authenticateUser.js";

const RouterWOAuth = (app) => {
    main(app);
    auth(app);
    authUser(app);
}

export default RouterWOAuth