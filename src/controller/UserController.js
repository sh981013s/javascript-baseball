const UserModel = require("../model/UserModel");

class UserController {
  #mainController;
  #userModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#userModel = new UserModel();
  }

  isFirstGame() {
    return this.#userModel.isFirstGame();
  }

  setIsFirstGameFalse() {
    this.#userModel.setIsFirstGameFalse();
  }
}

module.exports = UserController;
