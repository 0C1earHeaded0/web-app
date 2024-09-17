import main from "./mainPageRoute.js";
import auth from "./authPageRoute.js";
import download from "./downloadPageRoute.js";

const Router = (app) => {
    main(app);
    auth(app);
    download(app);
}

export default Router