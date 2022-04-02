import { ISort } from "./iSort";

export class DefaultSort implements ISort {
	public sort(numberArray: Array<number>): Array<number> {
		return [...numberArray].sort();
	}
}