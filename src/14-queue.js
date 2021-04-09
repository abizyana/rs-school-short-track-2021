const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    return this.siz;
  }

  enqueue(element) {
    if (!this.list) {
      this.list = new ListNode(element);
      this.siz = 1;
    } else {
      const acc = this.list;
      this.list = new ListNode(element);
      this.list.next = acc;
      this.siz++;
    }
  }

  dequeue() {
    if (!this.list.next) {
      const el = this.list.value;
      this.list = null;
      return el;
    }
    let temp = this.list;
    for (let i = 0; i < this.siz - 2; i++) {
      temp = temp.next;
    }

    const el = temp.next.value;

    temp.next = null;
    this.siz--;

    return el;
  }
}

module.exports = Queue;
