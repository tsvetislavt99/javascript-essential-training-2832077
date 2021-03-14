export default class Backpack {
  constructor(
    name,
    volume,
    color,
    numOfPockets,
    strapLL,
    strapLR,
    dateAquired,
    img
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.numOfPockets = numOfPockets;
    this.strapLength = {
      strapLL,
      strapLR,
    };
    this.lidOpen = false;
    this.dateAquired = Date.parse(dateAquired);
    this.img = img;
  }
  toggleLid(status) {
    this.lidOpen = status;
  }
  calculateDate() {
    let dateNow = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    let age = dateNow - this.dateAquired;

    return Math.round(age / oneDay);
  }
}
