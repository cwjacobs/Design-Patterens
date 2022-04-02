import { IBeverage } from "./iBeverage";
export interface IAddOnDecorator {
	beverage: IBeverage;
	
	cost(): number;
	description(): string;
}