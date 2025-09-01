function syncFunc() {
  return "This is JS Sync Function";
}
function asyncFunc() {
  setTimeout(() => {
    return "This is JS Async Function";
  }, 1000);
}
console.log(asyncFunc());
console.log("hello,world");
