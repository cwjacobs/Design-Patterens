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
		console.log(`onEnter --> LockedState --> ignore`);
		console.log(`state == LockedState\n`);
		return State.LOCKED;
	}

	public onPay(): State {
		console.log(`onPay --> LockedState --> ProcessingState`);
		console.log(`state == ProcessingState\n`);
		this.device.changeState(new ProcessingState(this.device));
		return State.PROCESSINGSTATE;
	}

	public onPayOk(): State {
		console.log(`onPayOk --> LockedState --> ignore`);
		console.log(`state == LockedState\n`);
		return State.LOCKED;
	}

	public onPayFailed(): State {
		console.log(`onPayFailed --> LockedState --> ignore`);
		console.log(`state == LockedState\n`);
		return State.LOCKED;
	}
}
