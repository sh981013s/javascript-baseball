const USER_TRY_MESSAGES = require("../constants/Messages");

const UserTryInputValidation = {
  hasDifferentThreeValues(splitUserInput) {
    return new Set(splitUserInput).size === 3;
  },

  isNumberInRange(splitUserInput) {
    for (const singleNumber of splitUserInput) {
      if (1 > splitUserInput || splitUserInput > 9) {
        return false;
      }
    }
    return true;
  },

  validate(userInput) {
    const splitUserInput = userInput.split("").map(Number);
    if (
      !this.hasDifferentThreeValues(splitUserInput) ||
      !this.isNumberInRange(splitUserInput)
    ) {
      throw new Error(USER_TRY_MESSAGES.ERROR);
    }
  },
};

module.exports = UserTryInputValidation;
