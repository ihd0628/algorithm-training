class Queue {
    constructor(priorities){
        this.queue = priorities;
        this.front = 0;
        this.rear = priorities.length;
    }
    
    dequeue(){
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }
    
    enqueue(value){
        this.queue[this.rear++] = value;
    }
    
    size(){
        return this.rear - this.front;
    }
    
    getQueue(){
        return this.queue.slice(this.front, this.rear);
    }
}

function solution(priorities, location) {
    var answer = 0;
    
    const queue = new Queue(priorities);
    let loopFlag = true;
    let curLocation = location+1;
    
    while(loopFlag){
        const value = queue.dequeue();
        
        const maxValue = Math.max(...queue.getQueue());

        
        
        if(value >= maxValue) {
            answer = answer + 1;
            if(curLocation == queue.front){
                loopFlag = false;   
            }
        } else {
            queue.enqueue(value);
            if(curLocation == queue.front){
                curLocation = queue.rear;
            }
        }
        
    }
    
    return answer;