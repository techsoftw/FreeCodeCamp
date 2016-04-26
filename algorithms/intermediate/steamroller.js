function steamroller(arr) {
	var result = [];
	arr.forEach(function(a) {
		if (Array.isArray(a))
      result = result.concat(steamroller(a));
		else
      result.push(a);
	});
	
	return result;
}

console.log(steamroller([1,[2],[[3,[[[4,5],6]]]]]));
