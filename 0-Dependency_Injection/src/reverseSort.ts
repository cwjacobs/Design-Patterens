import { ISort } from "./iSort";

export class ReverseSort implements ISort {
	public sort(array: Array<any>): Array<any> {
		return [...array].sort().reverse();
	}
}