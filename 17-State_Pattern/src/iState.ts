import { State } from "./types";

export interface IState {
	enter(): State;
	pay(): State;
	payOk(): State;
	payFailed(): State;
}