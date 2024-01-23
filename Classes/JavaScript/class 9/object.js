const CaptainAmerica = {
  name: "Steve Rogers",
  age: 165,
  allies: ["Tony", "Bucky", "Natasha", "Dr Banner", "Thor"],
  address: {
    country: "United States",
    city: {
      name: "Brooklyn",
      zipcode: 12345,
    },
  },
  isAvengerLeader: true,
  SayHi: function () {
    console.log("Captain Says Hi");
  },
};

// CRUD
// accessing the items of obj
console.log(CaptainAmerica.name);
console.log(CaptainAmerica.SayHi());

// updating the items of obj
CaptainAmerica.isAvengerLeader = false;
CaptainAmerica.address.city.zipcode = 54321;
console.log("Updated leader status", CaptainAmerica);

// adding the items into obj
CaptainAmerica.movies = [
  "Civil War",
  "End Game",
  "Age of Ultron",
  "Infinity War",
  "first Avenger",
];
console.log("Added Movies", CaptainAmerica);
// deleting the items from obj
delete CaptainAmerica.movies;
console.log("Removed Movies", CaptainAmerica);
