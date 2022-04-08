import { State } from "../src/types";
import { IState } from "../src/iState";
import { Turnstile } from "../src/turnstile";
import { IPayToEnter } from "../src/iPayToEnter";
import { LockedState } from "../src/lockedState";

describe("Given an IPayToEnter device", () => {
	const device: IPayToEnter = new Turnstile();

	describe("In the LockedState", () => {
		device.changeState(new LockedState(device));
		describe("When receiving an 'onPay' event", () => {
			let state = device.onPay();
			it("Then it should change state to 'Processing State'", () => {
				expect(state).toEqual("PROCESSINGSTATE");
			})
		});
	});

	describe("In the LockedState", () => {
		device.changeState(new LockedState(device));
		describe("When receiving an 'onEnter' event", () => {
			let state = device.onEnter();
			it("Then it should ignore the event and remain Locked", () => {
				expect(state).toEqual("LOCKED");
			})
		});
	});

	describe("In the LockedState", () => {
		device.changeState(new LockedState(device));
		describe("When receiving an 'onPayOk' event", () => {
			let state = device.onPayOk();
			it("Then it should ignore the event and remain Locked", () => {
				expect(state).toEqual("LOCKED");
			})
		});
	});

	describe("In the LockedState", () => {
		device.changeState(new LockedState(device));
		describe("When receiving an 'onPayFailed' event", () => {
			let state = device.onPayFailed();
			it("Then it should ignore the event and remain Locked", () => {
				expect(state).toEqual("LOCKED");
			})
		});
	});
});
