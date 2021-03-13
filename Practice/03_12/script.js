/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Laptop from "./Laptop.js";

const laptopBackpack = new Backpack(
  "Mi 13'3 Daily Bag",
  10,
  "Yellow",
  4,
  10,
  10,
  false
);

console.log(laptopBackpack);

laptopBackpack.toggleLid(true);

const macbook = new Laptop(
  "Macbook Air",
  "Apple",
  "M1",
  "256GB",
  13.3,
  true,
  false,
  "18 hours"
);

console.log(macbook);
macbook.close();
macbook.open();
macbook.open();
