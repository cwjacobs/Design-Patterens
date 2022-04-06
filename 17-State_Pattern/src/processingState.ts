import { State } from "./types";
import { IState } from "./iState";

export class ProcessingState implements IState {
	public enter(): State {
		console.log(`enter --> ProcessingState --> ignore`);
		console.log(`state == ProcessingState`);
		return State.PROCESSINGSTATE;
	}

	public pay(): State {
		console.log(`pay --> ProcessingState --> ignore`);
		console.log(`state == ProcessingState`);
		return State.PROCESSINGSTATE;
	}

	public payOk(): State {
		console.log(`payOk --> ProcessingState --> UnLockedState`);
		console.log(`state == UnLockedState`);
		return State.UNLOCKED;
	}

	public payFailed(): State {
		console.log(`pay --> ProcessingState --> LockedState`);
		console.log(`state == LockedState`);
		return State.LOCKED;
	}
}
