const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortNum = () => {
  oddsAndEvens.sort(function(a, b) {
  return a - b;
  });
}
sortNum();

console.log(oddsAndEvens);