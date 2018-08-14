import NasaapiService from "./nasaapi-service.js";

const nasaapiService = new NasaapiService();
let app = document.getElementById("app");

function draw(data) {
  console.log(data);
  app.innerHTML = `
    <nav class="navbar navbar-light">
      <span class="navbar-brand mb-0 h1">
        <div id="error"></div>
        <h1>APOD - Astronomy Picture of The Day</h1>  
          <form class="form-size" onsubmit="app.controllers.nasaapi.getApod(event)">
            <label for="date">Pick a Date</label>
            <input name="date" type="date">
            <button type='submit'>Submit</button>
          </form>
        </div>
      </span>
    </nav>
  `;
}

function drawApod(apod) {
  let apodElem = document.getElementById("main-content");
  let template = `
      <div class="row">
        <div class="col-sm-4 mt-4">
          <p>
            <b>Title:</b>
            <span>${apod.title}</span>
          </p>
          <img src="${apod.url}" />
        </div>

        <div class="col-sm-8 mt-4">
          <p>
          <b>Copyright:</b>
          <span>${apod.copyright}</span>
          </p>
        </div>

        <div class="col-sm-12 mt-3">
          <p>
          <b>Date:</b>
          <span>${apod.date}</span>
          </p>
        </div>

        <div class="col-sm-12 mt-3">
          <p>
          <b>Media Type:</b>
          <span>${apod.mediaType}</span>
          </p>
        </div>

        <div class="col-sm-12">
          <p>
          <b>Explanation:</b>
          <span>${apod.explanation}</span>
          </p>
        </div>
      </div>
      `;

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
