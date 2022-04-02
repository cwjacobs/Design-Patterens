import { IBeverage } from "../iBeverage";
import { IAddOnDecorator } from "../iAddOnDecorator";
import { Coffee } from "../coffee";
import { Cream } from "../cream";

describe("Adding Cream", () => {
	describe("Given a beverage", () => {
		describe("When Cream is added", () => {
			var beverage: IBeverage = new Coffee();
			var withCream: IAddOnDecorator = new Cream(beverage);
			it("Then the cost increases by $0.75", () => {
				expect(withCream.cost()).toEqual(beverage.cost() + 2.00);
			});
			it("Then the description includes Cream", () => {
				expect(withCream.description()).toContain("Cream");
			});
		});
	});
});
