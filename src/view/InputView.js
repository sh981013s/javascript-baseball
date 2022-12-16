const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  readBridgeSize(callbackFunction) {
    Console.readLine(USER_TRY_MESSAGES.INPUT, (userTryInput) => {
      callbackFunction(userTryInput);
    });
  },
};

module.exports = InputView;
