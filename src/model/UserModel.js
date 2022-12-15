class UserModel {
  #isFirstGame;

  constructor() {
    this.#isFirstGame = true;
  }

  isFirstGame() {
    return this.#isFirstGame;
  }

  setIsFirstGameFalse() {
    this.#isFirstGame = false;
  }
}

module.exports = UserModel;
