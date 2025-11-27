import userModel, { productModel } from "./model.js";

class UserService {
  users = userModel;
  async findAllUser() {
    const users = await this.users.find();
    return users;
  }
  async findById(userId) {
    const user = await this.users.findById(userId);
    return user;
  }
  async createUser(data) {
    const user = await this.users.create(data);
    return user;
  }
}
export default UserService;

export class ProductService {
  product = productModel;
  async findAllProduct() {
    const products = await this.product.find();
    return products;
  }
  async findById(id) {
    const product = await this.product.findById(id);
    return product;
  }
  async createProduct(data) {
    const product = await this.product.create(data);
    return product;
  }
}
