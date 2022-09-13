const add = function(a,b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(sumArray) {
  let i = 0;
  let total = sumArray[0];

  if (sumArray.length == 1) {
      return (sumArray[i]);
    }
  else if (sumArray.length == 0) {
    return 0;
  } 
  else if (sumArray.length > 1)
  {
    for (let i = 0; i < sumArray.length - 1; i++)
    {
      total = total + sumArray[i + 1];
    }
  }return total;
};

const multiply = function(sumArray) {
  let i = 0;
  let total = sumArray[0];

  if (sumArray.length == 1) {
      return (sumArray[i]);
    }
  else if (sumArray.length == 0) {
    return 0;
  } 
  else if (sumArray.length > 1)
  {
    for (let i = 0; i < sumArray.length - 1; i++)
    {
      total = total * sumArray[i + 1];
    }
  }return total;
};

const power = function(a,b) {
	let total = a;
  while (b > 1){
    b--;
    total = total * a;
  }
  return total;
};

const factorial = function(a) {
	let total = a;
  
  if (a == 0 || a == 1)
  {
    return (1);
  }
  else if (a > 1)
  {
    for (let i = 1; i < a; i++)
    {
      total = total * (a - i)
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
