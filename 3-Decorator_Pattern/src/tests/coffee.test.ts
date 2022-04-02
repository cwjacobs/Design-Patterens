import { IBeverage } from "../iBeverage";
import { Coffee } from "../coffee";

describe("Ordering Coffee", () => {
	describe("Given a black coffee", () => {
		describe("When nothing is added", () => {
			var coffee: IBeverage = new Coffee();
			it("Then the cost is $4.00", () => {
				expect(coffee.cost()).toEqual(4.00);
			});
			it("Then the description is Coffee", () => {
				expect(coffee.description()).toBe("Coffee");
			});
		});
	});
});
