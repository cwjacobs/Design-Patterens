import { IPayToEnter } from "./iPayToEnter";
import { State } from "./types";

export interface IState {
	onEnter(): State;
	onPay(): State;
	onPayOk(): State;
	onPayFailed(): State;
}