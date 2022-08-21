const repeatString = function(string, num)
{
	let variable = string;
	let newVariable;

	if (num > 0)
	{
		newVariable = variable.repeat(num)
		return (newVariable)
	}
	else if (num == 0)
	{
			return ('');
	}
	else if (num < 0)
		return ('ERROR');
};

// Do not edit below this line
module.exports = repeatString;
