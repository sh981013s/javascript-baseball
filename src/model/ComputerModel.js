class ComputerModel {
  #computerNumber;

  constructor() {
    this.#computerNumber = null;
  }

  setComputerNumber(newComputerNumber) {
    this.#computerNumber = newComputerNumber;
  }
}

module.exports = ComputerModel;
