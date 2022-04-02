import { ISort } from "./iSort";
import { IInjectableArray } from "./iInjectableArray";

export class InjectableArray implements IInjectableArray {
	private array: Array<any>;
	public constructor(array?: Array<any>) {
		this.array = array ? [...array] : [];
	}

	public sort(sortStrategy: ISort): Array<any> {
		return sortStrategy.sort(this.array);
	}
}
