let arrList: number[] = [2, 3, 4, 5]
function getMaxNumber(arr: number[]): number {
	return arr.sort((a, b) => a - b)[0]
}
console.log(getMaxNumber(arrList))
