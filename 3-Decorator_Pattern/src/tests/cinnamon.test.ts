import { Cinnamon } from "../cinnamon";
import { IBeverage } from "../iBeverage";
import { IAddOnDecorator } from "../iAddOnDecorator";
import { Coffee } from "../coffee";

describe("Adding Cinnamon", () => {
	describe("Given a beverage", () => {
		describe("When cinnamon is added", () => {
			var beverage: IBeverage = new Coffee();
			var withCinnamon: IAddOnDecorator = new Cinnamon(beverage);
			it("Then the cost increases by $0.75", () => {
				expect(withCinnamon.cost()).toEqual(beverage.cost() + 0.75);
			});
			it("Then the description includes Cinnamon", () => {
				expect(withCinnamon.description()).toContain("Cinnamon");
			});
		});
	});
});
