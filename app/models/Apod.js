export default class Apod {
  constructor(reqData) {
    this.copyright = reqData.copyright;
    this.date = reqData.date;
    this.explanation = reqData.explanation;
    this.hdurl = reqData.hdurl;
    this.mediaType = reqData.media_type;
    this.serviceVersion = reqData.service_version;
    this.title = reqData.title;
    this.url = reqData.url;
  }
}
