class Maxheap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && value > this.heap[parentIndex]) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rigthIndex = 3;
    console.log(this.heap);
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rigthIndex]
    ) {
      console.log("작동!");
      console.log("this.heap[currentIndex] : ", this.heap[currentIndex]);
      console.log("this.heap[leftIndex] : ", this.heap[leftIndex]);
      console.log("this.heap[rigthIndex] : ", this.heap[rigthIndex]);
      console.log(this.heap[leftIndex] > this.heap[rigthIndex]);
      if (this.heap[leftIndex] < this.heap[rigthIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rigthIndex];
        this.heap[rigthIndex] = temp;

        currentIndex = rigthIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;

        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rigthIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

function solution(no, works) {
  const maxHeap = new Maxheap();

  for (const work of works) {
    maxHeap.push(work);
  }

  for (let i = 0; i < no; i += 1) {
    const poped = maxHeap.pop() - 1;
    maxHeap.push(poped);
  }
  console.log(maxHeap);
}
