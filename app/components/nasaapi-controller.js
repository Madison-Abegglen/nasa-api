import NasaapiService from "./nasaapi-service.js";

const nasaapiService = new NasaapiService();
let app = document.getElementById("app");

function draw(data) {
  console.log(data);
  app.innerHTML = `
    <div id="error"></div>
    <form onsubmit="app.controllers.nasaapi.getApod(event)">
        <label for="date">Pick a Date</label>
        <input name="date" type="date">
        <button type='submit'>Submit</button>
    </form>`;
}

function drawApod(apod) {
  let apodElem = document.getElementById("main-content");
  let template = `
    <div>
      <p>
        <b>Title:</b>
        <span>${apod.title}</span>
      </p>
      <img src="${apod.url}" />
      <p>
        <b>Copyright:</b>
        <span>${apod.copyright}</span>
      </p>
      <p>
        <b>Date:</b>
        <span>${apod.date}</span>
      </p>
      <p>
        <b>Explanation:</b>
        <span>${apod.explanation}</span>
      </p>
      <p>
        <b>Media Type:</b>
        <span>${apod.mediaType}</span>
      </p>
      <p>
        <b>Service Version:</b>
        <span>${apod.serviceVersion}</span>
      </p>
    </div>`;

  apodElem.innerHTML = template;
}

function drawError(error) {
  console.log(error);
  document.getElementById("error").innerHTML = error.message;
}

export default class NasaapiController {
  constructor() {
    draw();
  }

  getApod(event) {
    event.preventDefault();
    let formData = event.target;
    let date = formData.date.value;
    nasaapiService.getApod(date, drawApod, drawError);
  }
}
