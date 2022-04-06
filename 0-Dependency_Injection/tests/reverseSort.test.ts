import { ReverseSort } from "../src/reverseSort";

describe("Reverse Sort", () => {
	describe("Given an array", () => {
		describe("When the elements are sortable", () => {
			it("Then it sorts the elements in reverse of default order", () => {
				var sortedArray = new ReverseSort().sort([11, 99, 34, 72, 85]);
				expect(sortedArray).toEqual([99, 85, 72, 34, 11]);
			})
		});
	});
});

test("sort an array of numbers using 'reverse' sort (largest to smallest)", () => {
	var defaultSort = new ReverseSort();
	var sortedArray = defaultSort.sort([1, 9, 4, 2]);
	expect(sortedArray).toEqual([9, 4, 2, 1]);
});

test("sort an array of letters using 'reverse' sort (largest to smallest)", () => {
	var reverseSort = new ReverseSort();
	var sortedArray = reverseSort.sort(["g", "a", "c", "q"]);
	expect(sortedArray).toEqual(["q", "g", "c", "a"]);
});
