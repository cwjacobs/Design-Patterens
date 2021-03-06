import { IBeverage } from "../src/iBeverage";
import { IAddOnDecorator } from "../src/iAddOnDecorator";
import { Coffee } from "../src/coffee";
import { Sugar } from "../src/sugar";

describe("Adding Sugar", () => {
	describe("Given a beverage", () => {
		describe("When Sugar is added", () => {
			var beverage: IBeverage = new Coffee();
			var withSugar: IAddOnDecorator = new Sugar(beverage);
			it("Then the cost increases by $0.75", () => {
				expect(withSugar.cost()).toEqual(beverage.cost() + 0.50);
			});
			it("Then the description includes Sugar", () => {
				expect(withSugar.description()).toContain("Sugar");
			});
		});
	});
});
