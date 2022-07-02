// Бинарный поиск

// Найти номер элемента массива, который имеет заданное значение
// [ 'Mary', 'Adam', 'Kate', 'Nikolas', 'Tim' ] Найти имя 'Nikolas'
// [ 'Adam', 'Kate', 'Mary', 'Nikolas', 'Tim' ]

const binarySearch = (arr, element) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.round((start + end) / 2);

    if (arr[mid] === element) {
      return mid;
    }
    if (arr[mid] > element) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};

const arr = ['Adam', 'Kate', 'Mary', 'Nikolas', 'Tim'];
alert(binarySearch(arr, 'Kate'));
