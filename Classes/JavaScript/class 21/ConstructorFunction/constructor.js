const car1 = {
  name: "Nexon",
  color: "coral",
  model: "Nexon Petrol",
  topspeed: "160kmph",
};

const car2 = {
  name: "Tiago",
  color: "black",
  model: "Electrical",
  topspeed: "100kmph",
};

const car3 = {
  name: "Safari",
  color: "red",
  model: "Disel",
  topspeed: "240kmph",
};

const car4 = {
  name: "Harrier",
  color: "black",
  model: "Petrol",
  topspeed: "240kmph",
};

const car5 = {
  name: "Altroz",
  color: "blue",
  model: "Petrol",
  topspeed: "160kmph",
};

// constructor

// -> used to initialize object variables
// -> in order to create object you use new keyword

// step 1 : {}
// step 2 : this -> {
//  name: undefined,
//  model: undefined,
//  topspeed: undefined,
//  color: undefined,
// }

// step 3 : this -> {
//     name: 'altroz',
//     color: 'blue',
//     model: 'electric',
//     topspeed: '240kmph',
// }

function TataCar(name, color, model, topspeed) {
  this.name = name;
  this.color = color;
  this.model = model;
  this.topspeed = topspeed;
}

const altroz = new TataCar("Altroz", "blue", "Electric", "180kmph");
const safari = new TataCar("safari", "red", "petrol", "240kmph");
console.log(altroz);

// 2 ways of creating objects in js
// {} | constructor function
