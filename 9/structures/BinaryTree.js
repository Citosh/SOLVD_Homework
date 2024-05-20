class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true;
        }
    }

    inOrderTraversal(callback) {
        this.inOrder(this.root, callback);
    }

    inOrder(node, callback) {
        if (node !== null) {
            this.inOrder(node.left, callback);
            callback(node.value);
            this.inOrder(node.right, callback);
        }
    }

    preOrderTraversal(callback) {
        this.preOrder(this.root, callback);
    }

    preOrder(node, callback) {
        if (node !== null) {
            callback(node.value);
            this.preOrder(node.left, callback);
            this.preOrder(node.right, callback);
        }
    }

    postOrderTraversal(callback) {
        this.postOrder(this.root, callback);
    }

    postOrder(node, callback) {
        if (node !== null) {
            this.postOrder(node.left, callback);
            this.postOrder(node.right, callback);
            callback(node.value);
        }
    }
}


export function isBST(node, min = null, max = null) {
    if (node === null) {
        return true;
    }
    if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
        return false;
    }
    return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
}
