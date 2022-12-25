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
    console.log(this.length)
    if (this.length > this.size) {
      this.size *= 2
    }
    return (this.size = this.size)
  }

  checkIndex(index) {
    console.log(this.length)
    if (this.length - 1 < index) {
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
  set(index, value) {}

  // Добавляет новый элемент в массив.
  // Если index не определён — добавляет в конец массива.
  // В противном случае — добавляет по индексу со сдвиго всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Увеличивает выделенную память вдвое, если необходимо.
  // Возвращает новую длину массива.
  add(value, index) {
    this.length++
    if (index === undefined) {
      return (this.memory[this.length - 1] = value)
    }
    this.checkSizeArr()
  }

  // Удаляет элемент по индексу со сдвигом всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Возвращает новую длину массива.
  delete(index) {}
}

function allocate(size) {
  const memory = {}

  for (let i = 0; i < size; i++) {
    memory[i] = undefined
  }

  return memory
}

const arr = new MyArray(1)
console.log(arr.add(1))
console.log(arr.get(0))
console.log(arr.add(1))
console.log(arr.add(1))
console.log(arr)
