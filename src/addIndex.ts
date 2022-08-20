import arraySuffle from 'shuffle-array'

import { getIndexPadStart } from './utils/getIndexPadStart'
import { getDirFilesName } from './utils/getDirFilesName'
import { renameFile } from './utils/renameFile'

const addIndexInFileName = (filesName: string[]): string[] => {
	const indexPadStart = getIndexPadStart(filesName.length)

	return filesName.map((fileName, index) =>
		`${String(index).padStart(indexPadStart, '0')}-${fileName}`
	)
}

export const addIndex = () => {
	try {
		const dirFilesName = getDirFilesName()

		const shuffleFilesName = arraySuffle(dirFilesName)

		const filesNameWithIndex = addIndexInFileName(shuffleFilesName)

		const indexPadStart = getIndexPadStart(dirFilesName.length)

		dirFilesName.forEach(dirFileName => {
			const fileNameWithIndexPosition = filesNameWithIndex.findIndex(fileName =>
				dirFileName === fileName.substring(indexPadStart + 1))

			if(fileNameWithIndexPosition === -1) return

			renameFile(dirFileName, filesNameWithIndex[fileNameWithIndexPosition])

			filesNameWithIndex.slice(fileNameWithIndexPosition, 1)
		})

	} catch(err) {
		console.error(err)
	}
}

addIndex()
