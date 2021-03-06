function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "matthew" }, { mood: "network stuff rocks!" }));

interface Lengthy {
  length: number;
}

function sayMyLength<T extends Lengthy>(el: T) {
  if (el.length === 0) return "What Length?!";
  else return `You have ${el.length} element${el.length > 1 ? "s" : ""}`;
}

console.log(sayMyLength("Hey yo"));
console.log(sayMyLength(""));
console.log(sayMyLength([1, 2, 3]));
console.log(sayMyLength([1]));

function accessKeyOf<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

accessKeyOf({ name: "eyo" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item));
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Mahdi");
textStorage.removeItem("Mahdi");
textStorage.addItem("Matthew");
console.log(textStorage.getItems());
