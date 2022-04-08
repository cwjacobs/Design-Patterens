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
		console.log(`onEnter --> UnLockedState --> LockedState`);
		console.log(`state == LockedState\n`);
		this.device.changeState(new LockedState(this.device));
		return State.LOCKED;
	}

	public onPay(): State {
		console.log(`onPay --> UnLockedState --> ignore`);
		console.log(`state == UnLockedState\n`);
		return State.UNLOCKED;
	}

	public onPayOk(): State {
		console.log(`onPayOk --> UnLockedState --> ignore`);
		console.log(`state == UnLockedState\n`);
		return State.UNLOCKED;
	}

	public onPayFailed(): State {
		console.log(`onPayFailed --> UnLockedState --> ignore`);
		console.log(`state == UnLockedState\n`);
		return State.UNLOCKED;
	}
}
