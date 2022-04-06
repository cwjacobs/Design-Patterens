import { State } from "./types";

export interface IPayToEnter {
	enter(): State;
	pay(): State;
	payOk(): State;
	payFailed(): State;
}