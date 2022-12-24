class MyArray {
  constructor(initialSize = 1) {
    if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
      throw new Error('Длина массива должна быть целым числом')
    }
    if (!(initialSize > 0)) {
      throw new Error('Размер массива должен быть больше нуля')
    }
    this.size = initialSize
    this.memory = allocate(initialSize)
    this.length = 0
  }

  checkSizeArr() {
    if (this.length === this.size) {
      this.size *= 2
    }
    return this.size
  }

  checkIndex(index) {
    console.log(this.length)
    if (this.length - 1 < index && index >= 0) {
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
    return console.log((this.memory[index] = value))
  }

  // Увеличивает выделенную память вдвое, если необходимо.
  // Возвращает новую длину массива.

  add(value, index) {
    // Если индекс за пределами - кидает ошибку.
    this.checkIndex(index)
    // Добавляет новый элемент в массив.
    // Если index не определён — добавляет в конец массива.
    if (index === undefined) {
      this.memory[this.length] = value
      this.length += 1
      // this.checkLengthArr()
    }
    // В противном случае — добавляет по индексу со сдвигом всех последующих элементов.
    else {
      for (let i = 0; i < this.length; i++) {
        console.log(i)
        console.log((this.memory[i] = this.memory[i + 1]))

        // console.log(this.memory[i]=this.memory[i+1])
      }
      console.log((this.memory[index] = value))
    }
    // this.length += 1
    console.log(this.memory)
    this.checkSizeArr()
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
const myArr = new MyArray()
console.log(myArr.add(0))
console.log(myArr.add(1))
console.log(myArr.add(3))
console.log(myArr.add(2, 2))
console.log(myArr.length)
console.log(myArr.size)
console.log(myArr.memory)
