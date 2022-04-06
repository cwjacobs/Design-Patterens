import { IPayToEnter } from "./iPayToEnter";
import { State } from "./types";
import { IState } from "./iState";
import { LockedState } from "./lockedState";
import { Turnstile } from "./turnstile";

const main = (): State => {
	let state: State = State.INIT;
	let turnstile: IPayToEnter = new Turnstile(new LockedState());

	state = turnstile.enter();

	state = turnstile.pay();

	state = turnstile.payOk();

	state = turnstile.payFailed();

	return state;
}

let finalState = main();
console.log(`Final State: ${finalState}`);
