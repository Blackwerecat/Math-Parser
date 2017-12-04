function type_of(char) {
	if (!isNaN(Number(char)))
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
	var lexed_array = [];
	var temp = '';
	for (i in array) {
		var char = array[i];
		if (prev != 'par' && prev == type_of(char)) {
			temp += char;
		}else {
			lexed_array.push(temp);
			temp = '';
		}
		prev = type_of(char);
	}
	if (temp)
		lexed_array.push(temp);
	return lexed_array;
}
