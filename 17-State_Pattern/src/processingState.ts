import { State } from "./types";
import { IState } from "./iState";
import { IPayToEnter } from "./iPayToEnter";
import { UnLockedState } from "./unLockedState";
import { LockedState } from "./lockedState";

export class ProcessingState implements IState {
	private device: IPayToEnter;

	public constructor(device: IPayToEnter) {
		this.device = device;
	}

	public onEnter(): State {
		console.log(`onEnter --> ProcessingState --> ignore`);
		console.log(`state == ProcessingState`);
		return State.PROCESSINGSTATE;
	}

	public onPay(): State {
		console.log(`onPay --> ProcessingState --> ignore`);
		console.log(`state == ProcessingState`);
		return State.PROCESSINGSTATE;
	}

	public onPayOk(): State {
		console.log(`onPayOk --> ProcessingState --> UnLockedState`);
		console.log(`state == UnLockedState`);
		this.device.changeState(new UnLockedState(this.device));
		return State.UNLOCKED;
	}

	public onPayFailed(): State {
		console.log(`onPayFailed --> ProcessingState --> LockedState`);
		console.log(`state == LockedState`);
		this.device.changeState(new LockedState(this.device));
		return State.LOCKED;
	}
}
