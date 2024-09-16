import main from "./mainPageRoute.js";
import auth from "./authPageRoute.js";

const Router = (app) => {
    main(app);
    auth(app);
}

export default Router

