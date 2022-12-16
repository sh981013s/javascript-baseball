const { Console } = require("@woowacourse/mission-utils");
const USER_TRY_MESSAGES = require("../constants/Messages");

const OutputView = {
  printWelcomeMessage() {
    Console.print(USER_TRY_MESSAGES.OPENING);
  },

  printErrorMessage(errorLog) {
    Console.print(errorLog);
  },
};

module.exports = OutputView;
