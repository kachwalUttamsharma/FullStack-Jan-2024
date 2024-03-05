// cafe -> getMenu -> put order -> serve -> generate bill -> payment -> exit

function getMenu(time) {
  console.log("I have entered the cafe");
  const flag = time >= 6 && time <= 10 ? true : false;
  const menu = new Promise(function (resolve, reject) {
    console.log("I have asked for the menu");
    if (flag) {
      resolve("menu is shared or given");
    } else {
      reject("Cafe is Closed, can you come back between 6 and 10");
    }
  });
  return menu;
}

function placeAnOrder(item1, item2) {
  const arr = ["Tea", "Coffee", "MilkShakes", "Biscuits"];
  const orderStatus = new Promise(function (resolve, reject) {
    if (arr.includes(item1) && arr.includes(item2)) {
      resolve(`Order has been placed for ${item1} and ${item2}`);
    } else {
      reject("One of the item or all items are not available that you ordered");
    }
  });
  return orderStatus;
}

function serve() {
  const servingOrder = new Promise(function (resolve) {
    setTimeout(() => {
      resolve(`Order is served, enjoy your time`);
    }, 5000);
  });
  return servingOrder;
}

function generateBill() {
  const bill = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pay the bill of 500 rupees");
    }, 1500);
  });
  return bill;
}

// getMenu(7).then((menu) => {
//     console.log(menu);
//     return placeAnOrder("Tea", "Biscuits");
//     }).then((order) => {
//         console.log(order);
//         return serve();
//         }).then((orderbeingserved) => {
//             console.log(orderbeingserved);
//             return generateBill();
//             }).then((bill) => {
//                 console.log(bill);
//                 console.log("Payment is done");
//                 console.log("Thank you for your service and we got out");
//                 }).catch((err) => {
//                 console.log(err);
//                 })

// async await -> promises -> consumers part been changes to handle events easily

async function cafeFlow() {
  try {
    const menu = await getMenu(7);
    const placingAnOrder = await placeAnOrder("Tea", "Biscuits");
    const servingOrder = await serve();
    const bill = await generateBill();
    console.log(menu);
    console.log(placingAnOrder);
    console.log(servingOrder);
    console.log(bill);
    console.log("Payment is done");
    console.log("Thank you for your service and we got out");
  } catch (err) {
    console.log(err);
  }
}

cafeFlow();
