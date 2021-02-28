import { ID } from "../marvel-app/tools/types"

export type AnyFunction = (...args: any[]) => unknown
export type Primitive = null | undefined | string | number | boolean | symbol | bigint

type DeepReadonly<T> =
	// tslint:disable-next-line: ban-types
	T extends AnyFunction | Primitive | React.MutableRefObject<HTMLElement | File | undefined | null>
		? T
		: T extends ReadonlyArray<infer R>
		? IDRArray<R>
		: T extends ReadonlyMap<infer K, infer V>
		? IDRMap<K, V>
		: T extends ReadonlySet<infer ItemType>
		? IReadonlySetDeep<ItemType>
		: T extends object
		? DRObject<T>
		: T

interface IDRArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

type DRObject<T> = {
	readonly [P in keyof T]: DeepReadonly<T[P]>
}

interface IDRMap<K, V> extends ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>> {}

interface IReadonlySetDeep<ItemType> extends ReadonlySet<DeepReadonly<ItemType>> {}

export type DRFC<P = {}> = React.FC<DeepReadonly<P>>

export interface IWithID {
	id: ID
}

export const isNil = (x: any): x is null | undefined => typeof x === "undefined" || x === null
