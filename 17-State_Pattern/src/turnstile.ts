import { IPayToEnter } from "./iPayToEnter";
import { State } from "./types";
import { IState } from "./iState";
import { LockedState } from "./lockedState";

export class Turnstile implements IPayToEnter {
	private state: IState;

	constructor() {
		this.state = new LockedState(this);
	}

	public onEnter(): State {
		return this.state.onEnter();
	}

	public onPay(): State {
		return this.state.onPay();
	}

	public onPayOk(): State {
		return this.state.onPayOk();
	}

	public onPayFailed(): State {
		return this.state.onPayFailed();
	}

	public changeState(state: IState): void {
		this.state = state;
	}
}
