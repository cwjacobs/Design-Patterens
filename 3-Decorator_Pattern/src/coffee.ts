import { IBeverage } from './iBeverage';

export class Coffee implements IBeverage {
	public cost(): number {
		return 4;
	}
	
	public description(): string {
		return "Coffee";
	}
}