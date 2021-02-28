import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"
import { AppAction } from "./actions"
import { State } from "./data"

export const useAppSelector = useSelector as TypedUseSelectorHook<State>

export const useAppDispatch = useDispatch as () => Dispatch<AppAction>
