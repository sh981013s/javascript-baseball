const { Console } = require("@woowacourse/mission-utils");
const USER_TRY_MESSAGES = require("../constants/Messages");

const InputView = {
  readBridgeSize(callbackFunction) {
    Console.readLine(USER_TRY_MESSAGES.INPUT, (userTryInput) => {
      callbackFunction(userTryInput);
    });
  },
};

module.exports = InputView;
