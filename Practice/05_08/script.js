import {
  everydayBackpack,
  redBackpack,
  frogBackpack,
} from "./components/data.js";

const backpacks = [everydayBackpack, redBackpack, frogBackpack];

backpacks.forEach((backpack) => {
  let articleElement = document.createElement("article");
  articleElement.classList.add("backpack");
  let backpackContent = `<figure class="backpack__image">
    <img src="${backpack.img}" alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
    <li class="feature backpack__volume">Volume: ${backpack.volume}l</li>
    <li class="feature backpack__color">Color: ${backpack.color}</li>
    <li class="feature backpack__age">Age: ${backpack.calculateDate()} days old</li>
    <li class="feature backpack__pockets">
      Number of pockets: ${backpack.numOfPockets}
    </li>
    <li class="feature backpack__strap" data-side="left">
      Left strap length: ${backpack.strapLength.strapLL} inches
      <form class="leftlength" data-children-count="1">
        <input
          type="number"
          name="leftLength"
          placeholder="New left length"
        />
        <button>Update</button>
      </form>
    </li>
    <li class="feature backpack__strap" data-side="right">
      Right strap length: ${backpack.strapLength.strapLR} inches
      <form class="rightlength" data-children-count="1">
        <input
          type="number"
          name="rightLength"
          placeholder="New right length"
        />
        <button>Update</button>
      </form>
    </li>
    <li class="feature backpack__lid">Lid open: ${backpack.lidOpen}</li>
    </ul>
    <button class="lid-toggle">Open lid</button>`;
  articleElement.innerHTML = backpackContent;
  document.querySelector(".maincontent").appendChild(articleElement);
});
