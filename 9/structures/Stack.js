export class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.stack.pop();
        } else {
            return null;
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.stack[this.stack.length - 1];
        } else {
            return null;
        }
    }

    isEmpty() {
        return this.stack.length === 0
    }
}

export class MinMaxStack extends Stack{
    constructor(){
        super()
        this.minStack = [];
        this.maxStack = [];
    }

    push(item) {
        this.stack.push(item);
        if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(item);
        }
        if (this.maxStack.length === 0  || item >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(item);
        }
    }

    pop() {
        if (!this.isEmpty()) {
            let item = this.stack.pop();
            if (item === this.minStack[this.minStack.length - 1]) {
                this.minStack.pop();
            }
            if (item === this.maxStack[this.maxStack.length - 1]) {
                this.maxStack.pop();
            }
            return item;
        } else {
            return null;
        }
    }

    getMin() {
        if (!this.isEmpty()) {
            return this.minStack[this.minStack.length - 1];
        } else {
            return null;
        }
    }

    getMax() {
        if (!this.isEmpty()) {
            return this.maxStack[this.maxStack.length - 1];
        } else {
            return null;
        }
    }

}
