const UserController = require("./UserController");
const ComputerController = require("./ComputerController");
const OutputView = require("../view/OutputView");
const InputView = require("../view/InputView");

class MainController {
  #userController;
  #computerController;

  constructor() {
    this.#userController = new UserController(this);
    this.#computerController = new ComputerController(this);
  }

  printError(errorLog) {
    OutputView.printErrorMessage(errorLog);
  }

  firstInitialize() {
    if (this.#userController.isFirstGame()) {
      OutputView.printWelcomeMessage();
    }
    InputView.readBridgeSize(this.processUserTryInput.bind(this));
  }
}

module.exports = MainController;
