import produce from "immer"
import { ACTION_TYPE } from "../tools/actions"
import { State, Turn } from "../tools/data"
import { AppAction } from "../tools/actions"
import { Hero, ID } from "../tools/types"
import { getRandomInteger } from "../../utils/numbers"
import { selectors } from "../tools/selectors"

const reducer = (draftSt: State, action: AppAction) => {
	switch (action.type) {
		case ACTION_TYPE.FETCH_HEROS_RESULT: {
			draftSt.heros = action.heros
			draftSt.turns = getNewTurns(action.heros)
			const leaders: Record<ID, number> = {}
			action.heros.forEach((hero) => {
				leaders[hero.id] = 0
			})
			draftSt.leaders = leaders
			break
		}
		case ACTION_TYPE.FETCH_HEROS_FAILED: {
			draftSt.errorMsg = "Failed to fetch heros"
			break
		}
		case ACTION_TYPE.SELECT_HERO: {
			draftSt.leaders![action.heroId] = draftSt.leaders![action.heroId] + 1
			selectors.getTurn(draftSt)!.winner = action.heroId
			break
		}
		case ACTION_TYPE.NEW_GAME: {
			draftSt.turns = getNewTurns(draftSt.heros!)
			break
		}
	}
}

const initState: State = {}

const selectAndRemoveRandomElement = <T extends any>(arr: T[]): T => {
	const rand = getRandomInteger(0, arr.length - 1)
	return arr.splice(rand, 1)[0]
}

const getNewTurns = (heros: Array<Hero>) => {
	let availableHeros = [...heros]
	let turns: Array<Turn> = []

	for (let i = 0; i < 5; i++) {
		const figure1 = selectAndRemoveRandomElement(availableHeros)
		const figure2 = selectAndRemoveRandomElement(availableHeros)

		turns.push({
			match: [figure1.id, figure2.id],
		})
	}

	return turns
}

export default produce(reducer, initState)
