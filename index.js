import "dotenv/config";
import App from "./app.js";
import UserRoute, { ProductRoute } from "./route.js";

const app = new App([new UserRoute(), new ProductRoute()]);
app.listen();
