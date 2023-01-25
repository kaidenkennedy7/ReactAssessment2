function unroll(squareArray) {
	const unrolledArray = []; //<-- final array to output

	// Edge case: if Array doesn't exist, return empty array
	// instead of null or undefined!
	if (squareArray.length === 0) {
		return unrolledArray;
	}

	let rowStart = 0; //<-- start index of first row of matrix at 0
	let rowEnd = squareArray.length - 1; //<-- index of last row of matrix
	let colStart = 0; //<-- start index of first column of matrix at 0
	let colEnd = squareArray[0].length - 1; //<-- index of last column of matrix

	// while the last index of matrix is greater than start index
	// or if array has items (rows and columns):
	while (colStart <= colEnd && rowStart <= rowEnd) {
		for (let i = colStart; i <= colEnd; i++) {
			// loop through array and push the first row items into final array
			unrolledArray.push(squareArray[rowStart][i]);
		}
		rowStart++; //<-- move on to the next row (add 1 to the start index)

		for (let i = rowStart; i <= rowEnd; i++) {
			// loop through array and push the items of last column into final array
			unrolledArray.push(squareArray[i][colEnd]);
		}
		colEnd--; //<-- move to the second last column (remove 1 from end of index)

		if (rowStart <= rowEnd) {
			//<-- if any more rows exist:
			for (let i = colEnd; i >= colStart; i--) {
				// loop through columns and add items of those rows into final array
				unrolledArray.push(squareArray[rowEnd][i]);
			}
		}
		rowEnd--; //<-- move to the second last row (remove 1 from end of index)

		if (colStart <= colEnd) {
			//<-- if any more columns exist:
			for (let i = rowEnd; i >= rowStart; i--) {
				// loops through rows and add items of those columns into final array
				unrolledArray.push(squareArray[i][colStart]);
			}
		}
		colStart++; //<-- move to the next column (add 1 to the start index)
	}
	return unrolledArray; //<-- return the final array
}

module.exports = unroll;