import { ReverseSort } from "../src/reverseSort";

test("sort an array of numbers using 'reverse' sort (largest to smallest)", () => {
	var defaultSort = new ReverseSort();
	var sortedArray = defaultSort.sort([1, 9, 4, 2]);
	expect(sortedArray).toEqual([9, 4, 2, 1]);
});
