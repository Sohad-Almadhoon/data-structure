// My Own Set
class MySet {
  constructor() {
    this.set = [];
    this.size = 0;
    this.index = 0;
  }
  has(item) {
    return this.set.indexOf(item) !== -1;
  }
  add(item) {
    if (!this.has(item)) {
      this.set[this.index] = item;
      this.index++;
      this.size++;
    }
  }
  delete(item) {
    const itemIndex = this.set.indexOf(item);
    if (itemIndex !== -1) {
      this.size--;
      this.index--;
      return this.set.splice(itemIndex, 1);
    }
  }
  keys() {
    return this.set.map((_, i) => i);
  }
  values() {
    return this.set;
  }
}
const set = new MySet();
set.add(10);
set.add(20);
set.add(30);
// set.add(10);
set.delete(30);
set.add(40);
// console.log(set.values());
// console.log(set.keys());
// console.log(set.has(40) , set.has(50));
