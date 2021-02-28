import { reliablyGetElementByID } from "../../utils/arr"
import { State } from "./data"
import { ID } from "./types"

export enum GAME_MODE {
	loading = "loading",
	playing = "playing",
	leaderBoard = "leaderBoard",
}

export const selectors = {
	getTurnsLeft: (st: State) => st.turns!.filter((st) => !st.winner),

	getTurn(st: State) {
		const turnsLeft = this.getTurnsLeft(st)
		if (turnsLeft.length === 0) {
			return undefined
		}
		return turnsLeft[0]
	},

	getTurnCount(st: State) {
		return 5 - this.getTurnsLeft(st).length
	},

	getMode: (st: State) =>
		!st.heros
			? GAME_MODE.loading
			: st.turns!.filter((turn) => turn.winner).length === 5
			? GAME_MODE.leaderBoard
			: GAME_MODE.playing,

	getHero(st: State, id: ID) {
		return reliablyGetElementByID(st.heros!, id)
	},

	getLeaders(st: State) {
		const leaders = st.leaders
		return Object.keys(leaders!)
			.sort((key1, key2) => leaders![key2 as any] - leaders![key1 as any])
			.slice(0, 10)
			.map((idStr) => ({
				hero: this.getHero(st, parseInt(idStr)),
				score: leaders![idStr as any],
			}))
	},
}

// export default selectors
