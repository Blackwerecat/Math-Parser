function type_of(char) {
	if (Number(char))
		return 'int';
	else if ('()'.includes(char))
		return 'par';
	else if ('.'.includes(char))
		return 'dot';
	else if ('+-*/'.includes(char))
		return 'opr';
	else
		return 'char';
}


function Lex(string) {
	var prev = '';
	var array = string.split('');
	for (i in array) {
		var char = array[i];
		console.log(type_of(char)+': '+char);
	}
}
