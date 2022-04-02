import { ISort } from "./iSort";

export class ReverseSort implements ISort {
	public sort(numberArray: Array<number>): Array<number> {
		return [... numberArray].sort().reverse();
	}
}