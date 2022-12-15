const UserController = require("./UserController");
const ComputerController = require("./ComputerController");
const OutputView = require("../view/OutputView");

class MainController {
  #userController;
  #computerController;

  constructor() {
    this.#userController = new UserController(this);
    this.#computerController = new ComputerController(this);
  }

  firstInitialize() {
    if (this.#userController.isFirstGame()) {
      OutputView.printWelcomeMessage();
    }
  }
}

module.exports = MainController;
