function add(
  input1: number | string,
  input2: number | string,
  type: "is-number" | "is-string"
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    type === "is-number"
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

const numbers = add(1, 3, "is-number");
const names = add("matt", "s", "is-string");

console.log(numbers, names);
