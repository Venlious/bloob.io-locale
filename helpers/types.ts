export type TranslateQueue = TranslateTask[]
export type TranslateTask = {
	path: string[]
	input: string[]
	description?: string
} & ({ type: `string` | `array` } | { type: `object`; inputKeys: string[] })
export type GenericMessage = {
	[key in string]: GenericMessageResult
}
export type GenericMessageResult = GenericMessage | string | null | (string | null)[]
export interface NestedObject {
	[key: string]: any
}
