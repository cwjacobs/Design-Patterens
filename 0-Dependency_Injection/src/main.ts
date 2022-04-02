import { ReverseSort } from "./reverseSort";
import { DefaultSort } from "./defaultSort";
import { InjectableArray } from "./injectableArray";

function main() {
	let myArray = ["dog", "wolf", "jackal", "coyote", "dingo", "wild dog"];

	let myinjectableArray: InjectableArray = new InjectableArray(myArray);
	
	let defaultArray = myinjectableArray.sort(new DefaultSort());
	_print(defaultArray);

	let reverseArray = myinjectableArray.sort(new ReverseSort());
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