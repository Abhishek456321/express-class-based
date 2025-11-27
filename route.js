import { Router } from "express";
import UserController, { ProductController } from "./controller.js";

class UserRoute {
  userController = new UserController();
  constructor() {
    this.path = "/api/user";
    this.router = Router();
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.post("/", this.userController.createUser);
    this.router.get("/", this.userController.getAllUser);
    this.router.get("/:id", this.userController.getUserById);
  }
}
export default UserRoute;

export class ProductRoute {
  productController = new ProductController();
  constructor() {
    this.path = "/api/product";
    this.router = Router();
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.get("/", this.productController.getAllProduct);
    this.router.get("/:id", this.productController.getProductById);
    this.router.post("/", this.productController.createProduct);
  }
}
