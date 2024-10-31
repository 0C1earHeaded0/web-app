import download from "./downloadPageRoute.js";
import getDataRoute from "./getDataRoute.js";
import downloadD from "./downloadDataRoute.js";

const RouterAuthOnly = (app) => {
    download(app);
    getDataRoute(app);
    downloadD(app);
}

export default RouterAuthOnly