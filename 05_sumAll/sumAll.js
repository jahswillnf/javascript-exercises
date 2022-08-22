const sumAll = function(firstNumber, secondNumber)
{
    let i;
    let sum1;
    let sum2;
    let b;
    let a;

    i = 1;
    a = firstNumber;
    sum1 = firstNumber;
    b = secondNumber;
    sum2 = secondNumber;

    if ((firstNumber < 0 ||  secondNumber < 0) ||
        (!(Number.isInteger(firstNumber))) ||
        (!(Number.isInteger(secondNumber))))
        return ('ERROR');
    else if (firstNumber  < secondNumber)
    {   while (a <= secondNumber)
        {
            sum1 = sum1 + i;
            i++;
            a++;
        }
        return (sum1-1);
    }
    else if (firstNumber > secondNumber)
    {
        while (b <= firstNumber)
        {
            sum2 = sum2 + i;
            i++;
            b++;
        }
        return (sum2-1);
    }
};

// Do not edit below this line
module.exports = sumAll;
