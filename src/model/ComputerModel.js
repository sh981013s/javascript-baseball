const ComputerNumberGenerator = require("../utils/ComputerNumberGenerator");

class ComputerModel {
  #computerNumber;

  constructor() {
    this.#computerNumber = null;
  }

  initializeComputerNumber() {
    this.#computerNumber =
      new ComputerNumberGenerator().getGeneratedComputerNumber();
  }
}

module.exports = ComputerModel;
