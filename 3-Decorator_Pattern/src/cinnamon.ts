import { IAddOnDecorator } from './iAddOnDecorator';
import { IBeverage } from './iBeverage';

export class Cinnamon implements IBeverage, IAddOnDecorator {
	beverage: IBeverage;
	ADD_ON_COST: number = 0.75;

	public constructor(beverage: IBeverage) {
		this.beverage = beverage;
	}

	public cost(): number {
		return this.beverage.cost() + this.ADD_ON_COST;
	}

	public description(): string {
		return this.beverage.description() + " + Cinnamon";
	}
}