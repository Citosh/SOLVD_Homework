export class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2, weight = 1) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push({ node: vertex2, weight });
        this.adjacencyList.get(vertex2).push({ node: vertex1, weight }); // For undirected graph
    }

    depthFirstSearch(start) {
        const visited = new Set();
        const result = [];

        const dfs = (vertex) => {
            if (!vertex) return;
            visited.add(vertex);
            result.push(vertex);
            this.adjacencyList.get(vertex).forEach(neighbor => {
                if (!visited.has(neighbor.node)) {
                    dfs(neighbor.node);
                }
            });
        };

        dfs(start);
        return result;
    }

    breadthFirstSearch(start) {
        const visited = new Set();
        const queue = [start];
        const result = [];

        while (queue.length) {
            const vertex = queue.shift();
            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);
                this.adjacencyList.get(vertex).forEach(neighbor => {
                    if (!visited.has(neighbor.node)) {
                        queue.push(neighbor.node);
                    }
                });
            }
        }
        return result;
    }
}

Graph.prototype.shortestPathBFS = function(start, target) {
    const visited = new Set();
    const queue = [[start]];
    
    while (queue.length) {
        const path = queue.shift();
        const vertex = path[path.length - 1];

        if (vertex === target) {
            return path;
        }

        if (!visited.has(vertex)) {
            visited.add(vertex);
            this.adjacencyList.get(vertex).forEach(neighbor => {
                if (!visited.has(neighbor.node)) {
                    const newPath = [...path, neighbor.node];
                    queue.push(newPath);
                }
            });
        }
    }
    return null; // If no path found
};

Graph.prototype.dijkstra = function(start, target) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();
    const path = [];

    this.adjacencyList.forEach((_, vertex) => {
        if (vertex === start) {
            distances[vertex] = 0;
            pq.enqueue(vertex, 0);
        } else {
            distances[vertex] = Infinity;
            pq.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
    });

    while (!pq.isEmpty()) {
        const { vertex } = pq.dequeue();

        if (vertex === target) {
            let current = target;
            while (previous[current]) {
                path.push(current);
                current = previous[current];
            }
            path.push(start);
            return path.reverse();
        }

        if (vertex || distances[vertex] !== Infinity) {
            this.adjacencyList.get(vertex).forEach(neighbor => {
                const candidate = distances[vertex] + neighbor.weight;
                const nextNeighbor = neighbor.node;

                if (candidate < distances[nextNeighbor]) {
                    distances[nextNeighbor] = candidate;
                    previous[nextNeighbor] = vertex;
                    pq.enqueue(nextNeighbor, candidate);
                }
            });
        }
    }
    return null; // If no path found
};

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(vertex, priority) {
        this.values.push({ vertex, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.values.length === 0;
    }
}