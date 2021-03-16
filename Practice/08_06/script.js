/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

import { backpacks } from "./data.js";

const mainEl = document.querySelector(".maincontent");

console.log(mainEl);

backpacks.forEach((backpack) => {
  const articleEl = createEl("article", [
    createEl("h1", backpack.name, { classList: "backpack-heading" }),
    createEl("ul", [
      createEl("li", backpack.color),
      createEl("li", String(backpack.volume)),
      createEl("li", String(backpack.pockets)),
    ]),
  ]);
  mainEl.append(articleEl);
});

function createEl(type, content, attributes) {
  const result = document.createElement(type);

  if (attributes !== undefined) {
    Object.assign(result, attributes);
  }

  if (Array.isArray(content)) {
    content.forEach(append);
  } else {
    append(content);
  }

  function append(node) {
    if (typeof node === "string") {
      node = document.createTextNode(node);
    }
    result.appendChild(node);
  }

  return result;
}
