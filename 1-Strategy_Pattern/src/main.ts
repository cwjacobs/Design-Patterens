import { ReverseSort } from "./reverseSort";
import { DefaultSort } from "./defaultSort";
import { NumberArray } from "./numberArray"

function main() {
	let myArray = [449, 1, 89, 3, 12, 11, 66];

	let myNumberArray = new NumberArray(new DefaultSort(), myArray);
	let defaultArray = myNumberArray.sort();
	_print(defaultArray);

	let myRevNumberArray = new NumberArray(new ReverseSort(), myArray);
	let reverseArray = myRevNumberArray.sort();
	_print(reverseArray);
}

function _print(array: Array<number>): void {
	console.log(`\n=========== Print begin ============\n`);
	array.forEach((element, index) => {
		console.log(`index: ${index} | element: ${element}`);
	});
	console.log(`\n========== Print complete ==========\n`);
}

main();