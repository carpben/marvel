import React from "react"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import reducer from "./manager/reducer"
import sideEffectMiddleware from "./manager/sideEffectMiddleware"
import { ACTION_TYPE } from "./tools/actions"
import { AppContainer } from "./components/AppContainer"

const store = configureStore({
	reducer: reducer,
	middleware: [sideEffectMiddleware],
})

const MarvelApp: React.SFC<{}> = () => (
	<Provider store={store}>
		<AppContainer />
	</Provider>
)

const { dispatch } = store
dispatch({
	type: ACTION_TYPE.INIT,
})

export default MarvelApp
