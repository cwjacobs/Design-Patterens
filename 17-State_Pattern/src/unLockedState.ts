import { State } from "./types";
import { IState } from "./iState";
import { IPayToEnter } from "./iPayToEnter";
import { testPathDirs } from "jest.config";
import { LockedState } from "./lockedState";

export class UnLockedState implements IState {
	private device: IPayToEnter;

	public constructor(device: IPayToEnter) {
		this.device = device;
	}

	public onEnter(): State {
		console.log(`enter --> UnLockedState --> LockedState`);
		console.log(`state == LockedState`);
		this.device.changeState(new LockedState(this.device));
		return State.LOCKED;
	}

	public onPay(): State {
		console.log(`pay --> UnLockedState --> ignore`);
		console.log(`state == UnLockedState`);
		return State.UNLOCKED;
	}

	public onPayOk(): State {
		console.log(`payOk --> UnLockedState --> ignore`);
		console.log(`state == UnLockedState`);
		return State.UNLOCKED;
	}

	public onPayFailed(): State {
		console.log(`pay --> UnLockedState --> ignore`);
		console.log(`state == UnLockedState`);
		return State.UNLOCKED;
	}
}
