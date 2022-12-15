class ComputerModel {
  #computerNumber;

  constructor() {
    this.#computerNumber = null;
  }

  static setComputerNumber(newComputerNumber) {
    this.#computerNumber = newComputerNumber;
  }
}

module.exports = ComputerModel;
