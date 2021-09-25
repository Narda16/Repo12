function myCounter(n) {
  if (n < 1) {
    return [];
  } else {
    var countArr = myCounter(n - 1);
    countArr.unshift(n);
    return countArr;
  }
}

console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));

module.exports = myCounter;
