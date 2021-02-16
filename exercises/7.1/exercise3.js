const num = 3;

const makeFatorial = () => {
  let total = num;
  for(let i = (num-1); i > 0; i -= 1) {
    total = total * i; 
  }
  console.log(`Var total ${total}`)
  
};
makeFatorial();

