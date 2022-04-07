import { IPayToEnter } from "./iPayToEnter";
import { State } from "./types";
import { IState } from "./iState";
import { LockedState } from "./lockedState";
import { Turnstile } from "./turnstile";

const main = (): State => {
	let state: State = State.INIT;
	let turnstile: IPayToEnter = new Turnstile();

	state = turnstile.onPay();

	state = turnstile.onPayOk();

	state = turnstile.onEnter();

	state = turnstile.onPayFailed();

	return state;
}

let finalState = main();
console.log(`Final State: ${finalState}`);
