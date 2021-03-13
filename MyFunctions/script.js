import createEl from "./createElement.js";

document.body.appendChild(
  createEl("main", "Hello", { className: "center-01", id: "meow" })
);
