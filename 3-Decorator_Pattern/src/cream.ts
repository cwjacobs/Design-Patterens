import { IAddOnDecorator } from './iAddOnDecorator';
import { IBeverage } from './iBeverage';

export class Cream implements IBeverage, IAddOnDecorator {
	beverage: IBeverage;
	ADD_ON_COST: number = 2;

	public constructor(beverage: IBeverage) {
		this.beverage = beverage;
	}

	public cost(): number {
		return this.beverage.cost() + this.ADD_ON_COST;
	}

	public description(): string {
		return this.beverage.description() + " + Cream";
	}
}