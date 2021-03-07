import { fetchHeros } from "./requests"

test("requestHeros returns an array", () =>
	fetchHeros().then((heros) => {
		expect.arrayContaining(heros)
	}))
