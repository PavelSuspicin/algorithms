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
    let clone = {}
    if (this.length === this.size) {
      this.size *= 2
      for (let key in user) {
        clone[key] = user[key]
      }
    }
    console.log(this.memory)
    return (this.memory = allocate(this.size))
  }

  checkIndex(index) {
    if (this.length - 1 < index || this.length === 0) {
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

  // В противном случае — добавляет по индексу со сдвиго всех последующих элементов.
  // Увеличивает выделенную память вдвое, если необходимо.
  // Возвращает новую длину массива.
  add(value, index) {
    // Если индекс за пределами - кидает ошибку.
    this.length++
    this.checkIndex()
    // this.checkSizeArr()
    // Добавляет новый элемент в массив.
    // Если index не определён — добавляет в конец массива.
    if (index === undefined) {
      return (this.memory[this.length - 1] = value)
    }
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

const arr = new MyArray()
console.log(arr)
console.log(arr.add(1))
console.log(arr.add(1))
console.log(arr.add(1))
console.log(arr.set(1, 10))
console.log(arr)
console.log(arr.set(2, 10))
console.log(arr)
