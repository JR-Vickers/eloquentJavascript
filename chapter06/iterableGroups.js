// Your code here (and the code from the previous exercise)

class Group {
  constructor() {
    this.array = [];
  }
  add(num) {
  	if (!this.has(num)) {
    	this.array.push(num)
    }
  }
  delete(num) {
  	this.array = this.array.filter(v => v !== num)
  }
  has(num) {
  	return this.array.includes(num)
  }
  static from(object) {
  	let group = new Group;
    for (let num of object) {
    	group.add(num)
    }
    return group;
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c