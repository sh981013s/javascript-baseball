const { Random } = require("@woowacourse/mission-utils");
const { GENERAL_CONSTANTS } = require("../constants/GeneralConstants");

class ComputerModel {
  #computerNumber;

  constructor() {
    this.#computerNumber = null;
  }

  setComputerNumber(newComputerNumber) {
    this.#computerNumber = newComputerNumber;
  }

  getGeneratedSingleNumber() {
    const singleNumber = Random.pickNumberInRange(
      GENERAL_CONSTANTS.START_NUMBER,
      GENERAL_CONSTANTS.END_NUMBER,
    );

    return singleNumber;
  }

  generateComputerNumber() {
    const generatedNumber = [];
    while (new Set(generatedNumber).size !== 3) {
      const singleNumber = this.getGeneratedSingleNumber();
      if (!generatedNumber.includes(singleNumber)) {
        generatedNumber.push(singleNumber);
      }
    }
    return generatedNumber;
  }
}

module.exports = ComputerModel;
