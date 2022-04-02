import { ISort } from "./iSort";

export class DefaultSort implements ISort {
	public sort(array: Array<any>): Array<any> {
		return [...array].sort();
	}
}