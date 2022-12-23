class MyArray {
  constructor(initialSize = 1) {
    if (
      Number(initialSize) !== initialSize ||
      Math.round(initialSize) !== initialSize
    ) {
      throw new Error('Длина массива должна быть целым числом')
    }
    if (!(initialSize > 0)) {
      throw new Error('Размер массива должен быть больше нуля')
    }
    this.size = initialSize
    this.memory = allocate(initialSize)
    this.length = 0
  }

  checkIndex(index) {
    if (index > this.size - 1) {
      throw new Error('Индекс за пределами вызова')
    }
  }

  // Возвращает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  get(index) {
    this.checkIndex(index)
    return this.memory[index]
  }

  // Устанавливает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  set(index, value) {
    this.checkIndex(index)
    return (this.memory[index] = value)
  }

  // В противном случае — добавляет по индексу со сдвигом
  // всех последующих элементов.
  // Увеличивает выделенную память вдвое, если необходимо.
  // Возвращает новую длину массива.
  add(value, index) {
    // Если индекс за пределами - кидает ошибку.
    this.checkIndex(index)
    // Если index не определён — добавляет в конец массива.
    if (index === undefined) {
      this.memory[this.length] = value
      this.length = this.length + 1
    }
    // Добавляет новый элемент в массив.
    else {
      this.memory[index] = value
      this.length = this.length + 1
    }
    if (this.length === this.size) {
    }

    return this.memory
  }

  // Удаляет элемент по индексу со сдвигом всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Возвращает новую длину массива.
  delete(index) {
    // ...
  }
}

function allocate(size) {
  const memory = {}
  for (let i = 0; i < size; i++) {
    memory[i] = undefined
  }
  return memory
}
const myArr = new MyArray(5)
console.log(myArr.add(3, 1))
console.log(myArr.add(4, 2))
console.log(myArr.add(2))
console.log(myArr.add(3))
console.log(myArr.add(4))
console.log(myArr)
console.log(myArr.size)
