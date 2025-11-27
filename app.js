import express from "express";
import cors from "cors";
import mongoose from "mongoose";

class App {
  constructor(routerArray) {
    this.app = express();
    this.port = process.env.PORT || 4000;
    this.routerArray = routerArray;
    this.initializeApp();
  }
  initializeApp() {
    this.app.use(express.json());
    this.app.use(cors());

    // can use more global middleware

    this.routerArray.forEach((r) => {
      this.app.use(r.path, r.router);
    });

    this.connectToDb();
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is listening at port ${this.port}`);
    });
  }
  async connectToDb() {
    try {
      await mongoose.connect(process.env.DB_URL);
      console.log("successfully connected to mongodb/intern.");
    } catch (error) {
      console.log("mongodb error : ", error);
      process.exit(1);
    }
  }
}
export default App;
