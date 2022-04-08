import { Turnstile } from "../src/turnstile";
import { IPayToEnter } from "../src/iPayToEnter";
import { UnLockedState } from "../src/unLockedState";

describe("Given an IPayToEnter device", () => {
	const device: IPayToEnter = new Turnstile();

	describe("In the UnLockedState", () => {
		device.changeState(new UnLockedState(device));
		describe("When receiving an 'onPay' event", () => {
			let state = device.onPay();
			it("Then it should ignore the event and remain unlocked", () => {
				expect(state).toEqual("UNLOCKED");
			})
		});
	});

	describe("In the UnLockedState", () => {
		device.changeState(new UnLockedState(device));
		describe("When receiving an 'onPayOk' event", () => {
			let state = device.onPayOk();
			it("Then it should ignore the event and remain unlocked", () => {
				expect(state).toEqual("UNLOCKED");
			})
		});
	});

	describe("In the UnLockedState", () => {
		device.changeState(new UnLockedState(device));
		describe("When receiving an 'onPayFailed' event", () => {
			let state = device.onPayFailed();
			it("Then it should ignore the event and remain unocked", () => {
				expect(state).toEqual("UNLOCKED");
			})
		});
	});

	describe("In the UnLockedState", () => {
		device.changeState(new UnLockedState(device));
		describe("When receiving an 'onEnter' event", () => {
			let state = device.onEnter();
			it("Then it should change its state to locked", () => {
				expect(state).toEqual("LOCKED");
			})
		});
	});
});
