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

  // Возвращает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  get(index) {
    if (index > this.size - 1) {
      throw new Error('Индекс за пределами вызова')
    }
    return this.memory[index]
  }

  // Устанавливает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  set(index, value) {
    if (index > this.size - 1) throw new Error('Индекс за пределами вызова')
    return (this.memory[index] = value)
  }

  // В противном случае — добавляет по индексу со сдвигом
  // всех последующих элементов.
  // Увеличивает выделенную память вдвое, если необходимо.
  // Возвращает новую длину массива.
  add(value, index) {
    this.length = index + 1
    // Если индекс за пределами - кидает ошибку.
    if (index > this.size - 1) throw new Error('Индекс за пределами')
    // Если index не определён — добавляет в конец массива.
    if (index === undefined) this.memory[this.size - 1] = value
    // Добавляет новый элемент в массив.
    else this.memory[index] = value
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
const myArr = new MyArray(2)
console.log(myArr)
console.log(myArr.add(1, 0))
console.log(myArr.length)
