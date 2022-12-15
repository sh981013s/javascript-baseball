const ComputerModel = require("../model/ComputerModel");

class ComputerController {
  #mainController;
  #computerModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#computerModel = ComputerModel;
  }
}

module.exports = ComputerController;
