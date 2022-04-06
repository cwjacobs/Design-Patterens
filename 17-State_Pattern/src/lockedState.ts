import { State } from "./types";
import { IState } from "./iState";

export class LockedState implements IState {
	public enter(): State {
		console.log(`enter --> LockedState --> ignore`);
		console.log(`state == LockedState`);
		return State.LOCKED;
	}

	public pay(): State {
		console.log(`pay --> LockedState --> ProcessingState`);
		console.log(`state == ProcessingState`);
		return State.PROCESSINGSTATE;
	}

	public payOk(): State {
		console.log(`payOk --> LockedState --> UnLockedState`);
		console.log(`state == UnLockedState`);
		return State.UNLOCKED;
	}

	public payFailed(): State {
		console.log(`payFailed --> LockedState --> LockedState`);
		console.log(`state == LockedState`);
		return State.LOCKED;
	}
}
