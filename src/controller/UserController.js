const UserModel = require("../model/UserModel");

class UserController {
  #mainController;
  #userModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#userModel = UserModel;
  }
}

module.exports = UserController;
