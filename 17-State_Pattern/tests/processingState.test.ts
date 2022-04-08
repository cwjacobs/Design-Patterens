import { State } from "../src/types";
import { IState } from "../src/iState";
import { Turnstile } from "../src/turnstile";
import { IPayToEnter } from "../src/iPayToEnter";
import { LockedState } from "../src/lockedState";
import { ProcessingState } from "../src/processingState";

describe("Given an IPayToEnter device", () => {
	const device: IPayToEnter = new Turnstile();

	describe("In the Processing State", () => {
		device.changeState(new ProcessingState(device));
		describe("When receiving an 'onPay' event", () => {
			let state = device.onPay();
			it("Then it should ignore the event and remain in the Processing State", () => {
				expect(state).toEqual("PROCESSINGSTATE");
			})
		});
	});

	describe("In the Processing State", () => {
		device.changeState(new ProcessingState(device));
		describe("When receiving an 'onEnter' event", () => {
			let state = device.onEnter();
			it("Then it should ignore the event and remain in the Processing State", () => {
				expect(state).toEqual("PROCESSINGSTATE");
			})
		});
	});

	describe("In the Processing State", () => {
		device.changeState(new ProcessingState(device));
		describe("When receiving an 'onPayOk' event", () => {
			let state = device.onPayOk();
			it("Then it should change state to the Unlocked state", () => {
				expect(state).toEqual("UNLOCKED");
			})
		});
	});

	describe("In the Processing State", () => {
		device.changeState(new ProcessingState(device));
		describe("When receiving an 'onPayFailed' event", () => {
			let state = device.onPayFailed();
			it("Then it should change state to the Locked state", () => {
				expect(state).toEqual("LOCKED");
			})
		});
	});
});
