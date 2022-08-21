const reverseString = function(string)
{
	let reverse = '';
	let i = string.length;

	while (i > 0)
	{
		reverse += string[i - 1];
        i -= 1;
	}
	return (reverse);


};

// Do not edit below this line
module.exports = reverseString;
