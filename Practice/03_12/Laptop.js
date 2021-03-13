class Laptop {
  constructor(
    model,
    brand,
    cpu,
    ssd,
    display,
    keyboardBacklit,
    isOpen,
    batteryLife
  ) {
    this.model = model;
    this.brand = brand;
    this.cpu = cpu;
    this.ssd = ssd;
    this.display = display;
    this.keyboardBacklit = keyboardBacklit;
    this.isOpen = isOpen;
    this.batteryLife = batteryLife;
  }

  open() {
    if (this.isOpen === true) {
      console.log("Laptop is already open");
    } else {
      this.isOpen = true;
    }
  }
  close() {
    if (this.isOpen === false) {
      console.log("Laptop is already closed");
    } else {
      this.isOpen = false;
    }
  }
}

export default Laptop;
