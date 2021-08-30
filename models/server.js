const cors = require("cors");
const express = require("express");

class Server {
   constructor() {
      this.port = process.env.PORT;
      this.app = express();

      // * paths
      this.paths = {};

      // * middlewares
      this.middlewares();

      // * routes
      this.routes();
   }

   // ? function that contains all middlewares of the app
   middlewares() {
      // * cors
      this.app.use(cors());

      // * public directory
      this.app.use(express.static("public"));
   }

   // ? function that handle the routes of the app
   routes() {
      // this.app.use(
      //    this.paths.uploads,
      //    require("../routes/upload.routes.js")
      // );
   }

   // ? funtion that listen the app in the port
   listen() {
      this.app.listen(this.port, () => {
         console.log("server run in port ", this.port);
      });
   }
}

module.exports = Server;
