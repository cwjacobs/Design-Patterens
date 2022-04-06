import { IPayToEnter } from "./iPayToEnter";
import { State } from "./types";
import { IState } from "./iState";
import { LockedState } from "./lockedState";

export class Turnstile implements IPayToEnter {
	private state: IState;

	constructor(state: IState) {
		this.state = state;
	}

	public enter(): State {
		return this.state.enter();
	}

	public pay(): State {
		return this.state.pay();
	}

	public payOk(): State {
		return this.state.payOk();
	}

	public payFailed(): State {
		return this.state.payFailed();
	}
}
