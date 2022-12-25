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
      for (let key in this.memory) {
        clone[key] = this.memory[key]
        console.log(clone[key])
      }
      console.log(clone)
    }
    // console.log(this.memory)
    // return (this.memory = allocate(this.size))
  }

  checkIndex(index) {
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
  set(index, value) {
    this.checkIndex(index)
    return (this.memory[index] = value)
  }

  // В противном случае — добавляет по индексу со сдвиго всех последующих элементов.
  // Увеличивает выделенную память вдвое, если необходимо.
  // Возвращает новую длину массива.
  add(value, index) {
    // Если индекс за пределами - кидает ошибку.
    this.checkIndex()
    this.length++
    this.checkSizeArr()
    // Добавляет новый элемент в массив.
    // Если index не определён — добавляет в конец массива.
    if (index === undefined) {
      return (this.memory[this.length - 1] = value)
    } else {
      for (let i = 0; i < this.length - 1; i++) {}
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
console.log(arr.add(10))
console.log(arr.add(11))
console.log(arr.add(12))
console.log(arr)
