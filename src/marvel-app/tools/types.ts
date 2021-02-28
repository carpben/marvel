export type ID = number

export interface Hero {
	id: ID
	name: string
	thumbnail: {
		path?: string
		extension?: string
	}
	comics?: Array<any>
	storie?: Array<any>
	events?: Array<any>
	series?: Array<any>
}
