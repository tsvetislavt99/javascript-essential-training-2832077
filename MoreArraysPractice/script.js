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

function lastKnumbersSequence(n, k) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      arr.push(1);
    } else if (arr.length >= k) {
      const toAdd = arr.slice(i - k, i);
      arr.push(toAdd.reduce((acc, curr) => acc + curr));
    } else {
      arr.push(arr.reduce((acc, curr) => acc + curr));
    }
  }

  return arr;
}

console.log(lastKnumbersSequence(9, 2));

function processOddNumbers(arr) {
  const newArr = [];
  arr.forEach((item, index) => {
    if (index % 2 !== 0) {
      newArr.unshift(item * 2);
    }
  });
  return newArr;
}

console.log(processOddNumbers([3, 0, 10, 4, 7, 3, 12, 12]));

function smallestTwoNumbers(arr) {
  let smallestNum = Number.MAX_SAFE_INTEGER;
  let smallestNumTwo = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
    if (arr[i] < smallestNumTwo && arr[i] !== smallestNum) {
      smallestNumTwo = arr[i];
    }
  }

  return [smallestNum, smallestNumTwo];
}

console.log(smallestTwoNumbers([10, 2, 4, 55, 22, 34]));

function biggestNumberOf2DArray(arr) {
  let currentBiggest = Number.MIN_SAFE_INTEGER;

  function printArray(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        // eslint-disable-next-line no-unused-vars
        printArray(arr[i]);
      } else {
        if (arr[i] > currentBiggest) currentBiggest = arr[i];
      }
    }

    return currentBiggest;
  }

  return printArray(arr);
}

console.log(
  biggestNumberOf2DArray([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
