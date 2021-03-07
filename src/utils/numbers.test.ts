import { randomInt } from "crypto"
import React from "react"
import { getPercentage, getRandomInteger } from "./numbers"

test("getPercentage returns percentage", () => {
	expect(getPercentage(10, 5)).toEqual(50)
	expect(getPercentage(10, -5)).toEqual(-50)
	expect(getPercentage(100, 0.3)).toEqual(0.3)
	expect(getPercentage(10, 100)).toEqual(1000)
})

test("getPercentage throws on invalid base", () => {
	expect(() => getPercentage(0, 5)).toThrowError()
})

test("getRandomInteger is in range", () => {
	for (let i = 0; i < 10; i++) {
		const randomInt = getRandomInteger(505, 510)
		expect(randomInt).toBeGreaterThanOrEqual(505)
		expect(randomInt).toBeLessThanOrEqual(510)
	}
})
