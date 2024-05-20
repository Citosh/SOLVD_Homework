export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    delete(value) {
        if (!this.head) return null;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;
        let previous = null;
        
        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }

        if (current) {
            previous.next = current.next;
            this.size--;
            return true;
        }

        return false;
    }

    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    printList() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}


export function hasCycle(head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}