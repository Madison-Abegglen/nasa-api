import Apod from "../models/Apod.js";

let apod = {};
const url =
  "https://api.nasa.gov/planetary/apod?api_key=L943vHQjp7pUn8JMvEudpzijFVktQpAvICPFvyCU";

export default class NasaapiService {
  getApod(date, draw, drawError) {
    console.log("HELLO FROM NASAAPI SERVICE");
    fetch(url + "&date=" + date)
      .then(res => res.json())
      .then(res => {
        let myApod = new Apod(res);
        draw(myApod);
      })
      .catch(drawError);

    console.log("HERE I AM");
  }

  get Apod() {
    return apod;
  }
}
