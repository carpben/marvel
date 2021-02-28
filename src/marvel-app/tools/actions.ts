import { Hero, ID } from "./types"

export enum ACTION_TYPE {
	INIT = "INIT",
	SELECT_HERO = "SELECT_HERO",
	NEW_GAME = "NEW_GAME",
	FETCH_HEROS_RESULT = "FETCH_HERO_RESULTS",
	FETCH_HEROS_FAILED = "FETCH_HEROS_FAILED",
}

export type AppAction =
	| {
			type: ACTION_TYPE.INIT | ACTION_TYPE.NEW_GAME | ACTION_TYPE.FETCH_HEROS_FAILED
	  }
	| {
			type: ACTION_TYPE.SELECT_HERO
			heroId: ID
	  }
	| {
			type: ACTION_TYPE.FETCH_HEROS_RESULT
			heros: Array<Hero>
	  }
