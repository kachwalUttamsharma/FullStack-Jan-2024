function prepareIngredients() {
  return new Promise(function (resolve, reject) {
    try {
      setTimeout(function () {
        console.log("Ingredient prepared");
        resolve();
      }, 2000);
    } catch (error) {
      reject(error);
    }
  });
}

function cookPatty() {
  return new Promise(function (resolve, reject) {
    try {
      setTimeout(function () {
        console.log("patty is cooked");
        resolve();
      }, 2000);
    } catch (error) {
      reject(error);
    }
  });
}

function assembleBurger() {
  return new Promise(function (resolve, reject) {
    try {
      setTimeout(function () {
        console.log("Burger is Assembled");
        resolve();
      }, 1500);
    } catch (error) {
      reject(error);
    }
  });
}

function addCondiments() {
  return new Promise(function (resolve, reject) {
    try {
      setTimeout(function () {
        console.log("Condiments added");
        resolve();
      }, 1500);
    } catch (error) {
      reject(error);
    }
  });
}

function serveBurger() {
  console.log("Burger is served");
}

prepareIngredients()
  .then(cookPatty)
  .then(assembleBurger)
  .then(addCondiments)
  .then(serveBurger)
  .catch((error) => {
    console.log(error);
  });
