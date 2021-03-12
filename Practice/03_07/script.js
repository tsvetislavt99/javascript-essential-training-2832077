/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const macbook = {
  model: "Macbook Air 13'3 M1 2337",
  cpu: "M1",
  ssd: "256GB",
  ram: "8GB",
  adapterConnected: false,
  connectAdapter: function (adapterStatus) {
    this, (this.adapterConnected = adapterStatus);
  },
  adapterModel: {
    usbPorts: 4,
    hdmi: false,
  },
};
