import { Hero, ID } from "./types"

export interface Turn {
	match: ID[]
	winner?: ID
}

export type State = {
	heros?: Array<Hero>
	turns?: Array<Turn>
	leaders?: Record<ID, number>
	errorMsg?: string
}
