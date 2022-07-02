// Stack Стек (Первый пришел первый ушел) - LIFO (Last in first out)
// Можем добавлять и удалять элементы только с конца, пример стопка тарелок

class Stack {
  constructor() {
    this._size = 0; // количество элементов
    this._storage = []; // хранилище значений
  }

  push(data) {
    // добавляем элемент
    this._storage[this._size] = data;
    this._size++;
  }

  pop() {
    // забираем элемент
    let index = this._size - 1;
    let deleteData;

    if (this._size) {
      deleteData = this._storage[index];
      this._storage.splice(index, 1);
      this._size--;
    }

    return deleteData;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
