// Defining Functions
function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

// Running Them
let arr = [5, 3, 8, 1];
console.log(camelize("rehbar-saifi"));
console.log(filterRange(arr, 1, 4));
console.log(arr.sort().reverse());

// Map To Objects
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));
console.log(usersMapped);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
