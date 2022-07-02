// Сортировка выбором

const findMinFromArr = (arr) => {
  let smallest = arr[0];
  let sIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      sIndex = i;
    }
  }

  return sIndex;
};

const selectionSort = (arr) => {
  let result = [];

  for (let i = 0; arr.length > 0; i++) {
    result.push(arr.splice(findMinFromArr(arr), 1)[0]);
  }

  return result;
};

console.log(selectionSort([5, 3, 6, 2, 10]));
