class UserModel {
  #isFirstGame;

  constructor() {
    this.#isFirstGame = true;
  }

  getIsFirstGame() {
    return this.#isFirstGame;
  }

  setIsFirstGameFalse() {
    this.#isFirstGame = false;
  }
}

module.exports = UserModel;
