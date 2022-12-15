const UserController = require("./UserController");
const ComputerController = require("./ComputerController");

class MainController {
  #userController;
  #computerController;

  constructor() {
    this.#userController = UserController;
    this.#computerController = ComputerController;
  }
}

module.exports = MainController;
