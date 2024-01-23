var a = 10;
var b = 20;
function add(a, b) {
  var ans = a + b;
  return ans;
}

var r = add(a, b);
var r1 = add(r, b);

console.log(r, r1);
