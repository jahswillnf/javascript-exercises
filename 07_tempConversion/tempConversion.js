const ftoc = function(number)
{
  let  celcius;

  celcius = (number - 32) * (5 / 9);
  return (Math.round(celcius * 10) / 10);
};

const ctof = function(number)
{
  let farhenheit;

  farhenheit = ((number  * (9 / 5)) + 32);
  return (Math.round(farhenheit * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
