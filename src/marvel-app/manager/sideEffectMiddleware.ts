import { getMiddleware, MiddlewareBody } from "../../utils/getMiddleware"
import { ACTION_TYPE, AppAction } from "../tools/actions"
import { State } from "../tools/data"
import { fetchHeros } from "../tools/requests"

const sideEffectMiddleware: MiddlewareBody<State, AppAction> = (dispatch, getState, next, action) => {
	console.log(action.type)
	switch (action.type) {
		case ACTION_TYPE.INIT: {
			fetchHeros()
				.then((heros) => {
					dispatch({
						type: ACTION_TYPE.FETCH_HEROS_RESULT,
						heros,
					})
				})
				.catch((e) => {
					dispatch({
						type: ACTION_TYPE.FETCH_HEROS_FAILED,
					})
				})
			break
		}
	}
	next(action)
}

export default getMiddleware(sideEffectMiddleware)
