function sumFirstAndLast(arr) {
  return Number(arr.shift()) + Number(arr.pop());
}

console.log(
  "The sum of the first and last elm from ['20','30','40']:",
  sumFirstAndLast(["20", "30", "40"])
);

function evenPostionElements(arr) {
  let onlyEven = [];
  arr.map(function (item, index) {
    if (index % 2 === 0) onlyEven.push(item);
  });

  return onlyEven;
}

console.log(
  "The elements with even position in [10, 20, 30, 40, 50, 60] are:",
  evenPostionElements([10, 20, 30, 40, 50, 60])
);

function negativePositiveNumber(arr) {
  let newArr = [];
  arr.forEach((element) => {
    if (element < 0) newArr.unshift(element);
    else newArr.push(element);
  });
  return newArr;
}

console.log(negativePositiveNumber([10, 20, -30, 40, -50]));
