class View {
  constructor(controller) {
    this.controller = controller;
    this.WELCOME_COMMENT = "숫자 야구 게임을 시작합니다.";
    this.GET_INPUT_COMMET = "숫자를 입력해주세요 : ";
    this.WRONG_COMMENT =
      "Input error! 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 입력해주세요";
    this.GAME_FINISHED_COMMENT = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    this.RESTART_COMMENT =
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
    this.RESTART_INVALID_INPUT_COMMENT =
      "1(게임 재시작) 혹은 2(게임 종료) 만 입력 가능합니다.";
    this.CLOSING_COMMENT = "게임 종료";
  }
}

module.exports = View;
