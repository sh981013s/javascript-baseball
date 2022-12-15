const UserModel = require("../model/UserModel");

class UserController {
  #mainController;
  #userModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#userModel = new UserModel();
  }

  getIsFirstGame() {
    return this.#userModel.getIsFirstGame();
  }

  setIsFirstGameFalse() {
    this.#userModel.setIsFirstGameFalse();
  }
}

module.exports = UserController;
