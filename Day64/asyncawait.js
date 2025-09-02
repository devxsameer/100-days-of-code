const server = {
  people: [
    {
      name: "Odin",
      age: 20,
    },
    {
      name: "Thor",
      age: 35,
    },
    {
      name: "Freyja",
      age: 29,
    },
  ],
  getPeople() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};
// function getPersonsInfo(name) {
//   return server.getPeople().then((people) => {
//     return people.find((person) => {
//       return person.name === name;
//     });
//   });
// }
async function getPersonsInfo(name) {
  const people = await server.getPeople();
  const person = people.find((person) => {
    return person.name === name;
  });
  return person;
}
console.log("Hello, Async and Await");
getPersonsInfo("Odin").then(console.log);
