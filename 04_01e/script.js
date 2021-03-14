/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";
import createEl from "../MyFunctions/createElement.js";

const everydayPack = new Backpack(
  "Everyday Pack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const mainElement = createEl("main", "", {});
const articleElement = createEl("article", "", { classList: "container-xl" });
const h1Element = createEl("h1", `${everydayPack.name}`, {
  classList: "container-sm",
});
const ul = createEl("div", "", { classList: "container" });
const rowVolume = createEl("div", `Volume: ${everydayPack.volume}`, {
  classList: "row justify-content-md-center",
});
// const content = `
//   <main>
//     <article>
//       <h1>${everydayPack.name}</h1>
//       <ul>
//         <li>Volume: ${everydayPack.volume}</li>
//         <li>Color: ${everydayPack.color}</li>
//         <li>Age: ${everydayPack.backpackAge()}</li>
//         <li>Number of pockets: ${everydayPack.pocketNum}</li>
//         <li>Left strap length: ${everydayPack.strapLength.left}</li>
//         <li>Right strap length: ${everydayPack.strapLength.right}</li>
//         <li>Lid status: ${everydayPack.lidOpen}</li>
//       </ul>
//     </article>
//   </main>
// `;

mainElement.appendChild(articleElement);
articleElement.appendChild(h1Element);
articleElement.appendChild(ul);
ul.appendChild(rowVolume);
document.body.appendChild(mainElement);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
