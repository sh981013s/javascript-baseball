const UserController = require("./UserController");
const ComputerController = require("./ComputerController");

class MainController {
  #userController;
  #computerController;

  constructor() {
    this.#userController = new UserController(this);
    this.#computerController = new ComputerController(this);
  }
}

module.exports = MainController;
