import download from "./downloadPageRoute.js";
import getDataRoute from "./getDataRoute.js";

const RouterAuthOnly = (app) => {
    download(app);
    getDataRoute(app);
}

export default RouterAuthOnly