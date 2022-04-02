import { ISort } from "./iSort";

export class NumberArray {
	private defaultNumberArray = [1, 5, 2, 4, 3];

	private strategy: ISort;
	private numberArray: Array<number>;

	public constructor(strategy: ISort, numberArray? : Array<number>) {
		this.strategy = strategy;
		this.numberArray = numberArray ? [...numberArray] : [...this.defaultNumberArray];
	}

	public sort(): Array<number> {
		return this.strategy.sort(this.numberArray);
	}
}
