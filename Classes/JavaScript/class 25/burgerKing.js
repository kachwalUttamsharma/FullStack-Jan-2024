function prepareIngredients(cb) {
  setTimeout(function () {
    console.log("Ingredient prepared");
    cb();
  }, 2000);
}

function cookPatty(cb) {
  setTimeout(function () {
    console.log("patty is cooked");
    cb();
  }, 2000);
}

function assembleBurger(cb) {
  setTimeout(function () {
    console.log("Burger is Assembled");
    cb();
  }, 1500);
}

function addCondiments(cb) {
  setTimeout(function () {
    console.log("Condiments added");
    cb();
  }, 1500);
}

function serveBurger() {
  console.log("Burger is served");
}

prepareIngredients(cookPatty(assembleBurger(addCondiments(serveBurger))));
