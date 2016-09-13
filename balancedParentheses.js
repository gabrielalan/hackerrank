function parenthesesAreBalanced(string) {
	var parentheses = "[]{}()", stack = [], i, character, bracePosition;

	for(i = 0; character = string[i]; i++) {
		bracePosition = parentheses.indexOf(character);

		if(!~bracePosition) {
			continue;
		}

		if(bracePosition % 2 === 0) {
			stack.push(bracePosition + 1); // push next expected brace position
		} else {
			if(stack.length === 0 || stack.pop() !== bracePosition) {
				return false;
			}
		}
	}

	return stack.length === 0;
}

var tests = ['()()', '[()]', '{[()]}', '((([{}])))', '{{{', '}}}', '{[}]', '(])'];

console.log(tests.map(parenthesesAreBalanced));