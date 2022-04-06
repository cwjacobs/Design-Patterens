import { DefaultSort } from "../src/defaultSort";

test("sort an array of numbers using 'default' sort (smallest to largest)", () => {
	var defaultSort = new DefaultSort();
	var sortedArray = defaultSort.sort([1, 9, 4, 2]);
	expect(sortedArray).toEqual([1, 2, 4, 9]);
});

test("sort an array of letters using 'default' sort (smallest to largest)", () => {
	var defaultSort = new DefaultSort();
	var sortedArray = defaultSort.sort(["g", "a", "c", "q"]);
	expect(sortedArray).toEqual(["a", "c", "g", "q"]);
});
