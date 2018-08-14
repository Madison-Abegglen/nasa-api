import NasaapiController from "./components/nasaapi-controller.js";

class App {
  constructor() {
    this.controllers = {
      nasaapi: new NasaapiController()
    };
  }
}

const app = new App();

window.app = app;
