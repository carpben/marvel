import { isArray } from "util"
import { isNil, IWithID } from "./types"

export const getElementById: <T extends IWithID>(
	obj: ReadonlyArray<T> | Readonly<Record<string, T>>,
	id: string | number | null,
) => T | undefined | null = (obj, id) => {
	if (id === null) {
		return null
	}
	const arr = isArray(obj) ? obj : Object.values(obj)
	// eslint-disable-next-line eqeqeq
	return arr.filter((el) => el.id == id)[0]
}

export const reliablyGetElementByID: <T extends IWithID>(
	obj: ReadonlyArray<T> | Readonly<Record<string, T>>,
	id: string | number | null,
) => T = (arr, id) => {
	const newEl = getElementById(arr, id)
	if (isNil(newEl)) {
		throw new Error("couldn't find element by ID")
	}
	return newEl
}
