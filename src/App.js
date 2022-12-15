const MainController = require("./controller/MainController");

class App {
  play() {
    const mainController = new MainController();
    mainController.firstInitialize();
  }
}

module.exports = App;
