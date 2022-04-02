import { ISort } from "./iSort";

export interface IInjectableArray {
	sort(sortStrategy: ISort): Array<any>;
}