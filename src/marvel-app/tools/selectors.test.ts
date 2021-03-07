import { selectors } from "./selectors"

test("trun selector", () => {
	expect(
		selectors.getTurnCount({
			turns: [
				{
					match: [12, 15],
				},
				{
					match: [23, 38],
				},
			],
		}),
	).toEqual(3)
})
