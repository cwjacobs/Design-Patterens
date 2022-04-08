import { IPayToEnter } from "./iPayToEnter";
import { State } from "./types";
import { IState } from "./iState";
import { LockedState } from "./lockedState";
import { Turnstile } from "./turnstile";

const main = (): State => {
	let state: State = State.INIT;
	let turnstile: IPayToEnter = new Turnstile();

	let deviceEvents = [
		["onEnter", "onPayOk", "onPay"],
		["onEnter", "onPay", "onPayOk", "onPayFailed"],
		["onPay", "onPayOk", "onPayFailed", "onEnter"],
		["onPayFailed", "onPay", "onPayOk", "onEnter"],
		["onEnter", "onPay", "onPayOk", "onPayFailed", "onEnter", "onPay", "onPayOk"],
	];

	deviceEvents.forEach((events) => {
		console.log(`******************  `);
		console.log(`Begin Event Series\n`);
		events.forEach((event) => {
			switch (event) {
				case "onEnter":
					state = turnstile.onEnter();
					break;
				case "onPay":
					state = turnstile.onPay();
					break;
				case "onPayOk":
					state = turnstile.onPayOk();
					break;
				case "onPayFailed":
					state = turnstile.onPayFailed();
					break;
			}
		});
	});
	return state;
}

let finalState = main();
console.log(`Final State: ${finalState}`);
