function type_of(char) {
	if (Number(char))
		return 'int';
	else if ('()'.includes(char))
		return 'par';
	else if ('.'.inclues(char))
		return 'dot';
	else if ('+-*/'.includes(char))
		return 'opr';
	else
		return 'char';
}


function Lex(string) {
	var prev = '';
	for (char in string.split('')) {
		console.log(type_of(char)+': '+char);
	}
}
