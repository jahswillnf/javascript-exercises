const removeFromArray = function(firstArray, ...toRemove)
{
    let	i;
	let index;
	
	i = 0;
	while (i < toRemove.length) 
	{
        index = firstArray.indexOf(toRemove[i]);
        if (index === -1) continue;
        firstArray.splice(index, 1);
		i++;
	 }
    return firstArray;
}

// Do not edit below this line
module.exports = removeFromArray;
