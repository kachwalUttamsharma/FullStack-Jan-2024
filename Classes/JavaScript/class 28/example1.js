function parent4() {
  var a = 20;
  function child() {
    let a = 10;
    console.log(a); // A. 10
    function child2() {
      console.log(a); // B. 10
      a = 30;
    }
    console.log(a); // C: 10
    child2();
  }
  child();
  console.log(a); // D: 20
}

parent4();
