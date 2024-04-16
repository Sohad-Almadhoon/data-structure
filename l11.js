// My Own Map
class MyMap {
  constructor() {
    this.items = {};
    this.size = 0;
  }
  has(key) {
    return this.items.hasOwnProperty(key);
  }
  set(key, value) {
    if (!this.has(key)) {
      this.size++;
    }
    this.items[key] = value;
  }
  delete(key) {
   if (this.has(key)) {
     this.size--;
   }
    return delete this.items[key];
  }
  get(key) {
    return this.items[key];
  }
  size() {
    return this.size();
  }
}
const map = new MyMap();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
console.log(map.delete("x"));
console.log(map)
// console.log(map.has("b"));
// console.log(map.get("d"));
// console.log(map.size);
