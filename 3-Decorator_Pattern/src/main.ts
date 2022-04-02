import { Coffee } from "./coffee";
import { Cream } from "./cream";
import { Sugar } from "./sugar";
import { Cinnamon } from "./cinnamon";

function main() {
	let beverage = new Coffee();
	let withCream = new Cream(beverage);
	let withSugar = new Sugar(withCream);
	let withCinnamon = new Cinnamon(withSugar);

	let cost = withCream.cost();
	let description = withCream.description();
	console.log(`Beverage: ${description} @ ${cost} per cup`);

	cost = withSugar.cost();
	description = withSugar.description();
	console.log(`Beverage: ${description} @ ${cost} per cup`);

	cost = withCinnamon.cost();
	description = withCinnamon.description();
	console.log(`Beverage: ${description} @ ${cost} per cup`);
}

main();