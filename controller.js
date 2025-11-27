import UserService, { ProductService } from "./service.js";

class UserController {
  userServices = new UserService();
  getAllUser = async (req, res) => {
    try {
      // const users = await this.userServices.findAllUser();
      const users = [
        { name: "abhisehk", age: 22, email: "abhsoehk@gmail.com" },
        { name: "hari", age: 23, email: "hari@gmail.com" },
        { name: "sita", age: 24, email: "sita@gmail.com" },
        { name: "gita", age: 25, email: "gitak@gmail.com" },
        { name: "pita", age: 26, email: "pita@gmail.com" },
      ];
      return res.json({ success: true, data: users });
    } catch (error) {
      return res.json({ success: false, message: "server/db error." });
    }
  };
  getUserById = async (req, res) => {
    try {
      // const user = await this.userServices.findById(req.params.id);
      const user = { name: "abhisehk", age: 22, email: "abhsoehk@gmail.com" };
      return res.json({ success: true, data: user });
    } catch (error) {
      return res.json({ success: false, message: "server/db error." });
    }
  };
  createUser = async (req, res) => {
    try {
      // const user = await this.userServices.createUser(req.body);
      const message = "user created successfully.";
      return res.json({ success: true, data: user, message });
    } catch (error) {
      return res.json({ success: false, message: "server/db error." });
    }
  };
}
export default UserController;

export class ProductController {
  productService = new ProductService();
  getAllProduct = async (req, res) => {
    // const products = await this.productService.getAllProduct();
    const products = [
      { productName: "Bike", price: "Rs 2000000" },
      { productName: "Helicopter", price: "Rs 4000000" },
      { productName: "Aeroplane", price: "Rs 5000000" },
      { productName: "Rocket", price: "Rs 6000000" },
      { productName: "Bicycle", price: "Rs 8000000" },
    ];
    return res.json({ success: true, data: products });
  };
  getProductById = async (req, res) => {
    // const product = await this.productService.findById(req.params.id);
    const product = { productName: "Rocket", price: "Rs 6000000" };
    return res.json({ success: true, data: product });
  };
  createProduct = async (req, res) => {
    // const product = await this.productService.createProduct();
    const product = { productName: "TriCycle", price: "Rs 99000000" };
    return res.json({ success: true, data: product });
  };
}
