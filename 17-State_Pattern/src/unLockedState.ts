import { State } from "./types";
import { IState } from "./iState";

export class UnLockedState implements IState {
	public enter(): State {
		console.log(`enter --> UnLockedState --> LockedState`);
		console.log(`state == LockedState`);
		return State.LOCKED;
	}

	public pay(): State {
		console.log(`pay --> UnLockedState --> ignore`);
		console.log(`state == UnLockedState`);
		return State.UNLOCKED;
	}

	public payOk(): State {
		console.log(`payOk --> UnLockedState --> ignore`);
		console.log(`state == UnLockedState`);
		return State.UNLOCKED;
	}

	public payFailed(): State {
		console.log(`pay --> UnLockedState --> ignore`);
		console.log(`state == UnLockedState`);
		return State.UNLOCKED;
	}
}
