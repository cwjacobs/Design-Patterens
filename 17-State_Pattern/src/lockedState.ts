import { State } from "./types";
import { IState } from "./iState";
import { IPayToEnter } from "./iPayToEnter";
import { UnLockedState } from "./unLockedState";
import { ProcessingState } from "./processingState";

export class LockedState implements IState {
	private device: IPayToEnter;
	public constructor(device: IPayToEnter) {
		this.device = device;
	}

	public onEnter(): State {
		console.log(`enter --> LockedState --> ignore`);
		console.log(`state == LockedState`);
		return State.LOCKED;
	}

	public onPay(): State {
		console.log(`pay --> LockedState --> ProcessingState`);
		console.log(`state == ProcessingState`);
		this.device.changeState(new ProcessingState(this.device));
		return State.PROCESSINGSTATE;
	}

	public onPayOk(): State {
		console.log(`payOk --> LockedState --> UnLockedState`);
		console.log(`state == UnLockedState`);
		this.device.changeState(new UnLockedState(this.device));
		return State.UNLOCKED;
	}

	public onPayFailed(): State {
		console.log(`payFailed --> LockedState --> ignore`);
		console.log(`state == LockedState`);
		return State.LOCKED;
	}
}
