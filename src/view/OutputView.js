const { Console } = require("@woowacourse/mission-utils");
const USER_TRY_MESSAGES = require("../constants/Messages");

const OutputView = {
  printWelcomeMessage() {
    Console.print(USER_TRY_MESSAGES.OPENING);
  },
};

module.exports = OutputView;
