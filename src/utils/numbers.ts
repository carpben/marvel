export const getRandomInteger = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getPercentage = (base: number, val: number) => {
	if (base === 0) {
		throw new Error("numberGetPercentage received 0 as base")
	}
	return (100 * val) / base
}
