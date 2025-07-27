// Day 42 - Learning About Js in Detail
// const myName = "Sameer Ali";
// console.log(myName);
// console.log(globalThis);

// Closures in JS
// function createGreeting(greeting = "") {
//   const myGreet = greeting.toUpperCase();

//   return function (name) {
//     return `${myGreet} ${name}`;
//   };
// }
// const sayGoodMorning = createGreeting("Good Morning");
// const sayGoodAfterNoon = createGreeting("Good Afternoon");
// console.log(sayGoodMorning("Sameer Ali"));
// console.log(sayGoodAfterNoon("Sameer Ali"));
const Formatter = (function () {
  let timesRun = [];

  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  const setTimesRun = () => {
    log("Setting times run");
    timesRun.push(null);
  };

  const makeUppercase = (text) => {
    log("Making uppercase");
    setTimesRun();
    return text.toUpperCase();
  };

  return {
    makeUppercase,
    timesRun,
  };
})();
console.log(Formatter.makeUppercase("Pokemon"));
console.log(Formatter.timesRun.length);
console.log(Formatter.makeUppercase("Itachi Uchiha"));
console.log(Formatter.timesRun.length);
