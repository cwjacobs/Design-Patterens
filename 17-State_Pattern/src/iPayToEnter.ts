import { State } from "./types";
import { IState } from "./iState";

export interface IPayToEnter {
	onEnter(): State;
	onPay(): State;
	onPayOk(): State;
	onPayFailed(): State;
	changeState(state: IState): void;
}