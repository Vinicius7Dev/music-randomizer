import { getIndexPadStart } from './utils/getIndexPadStart'
import { getDirFilesName } from './utils/getDirFilesName'
import { renameFile } from './utils/renameFile'
import { checkAlreadyHaveIndex } from './utils/checkAlreadyHaveIndex'

const removeIndexInFileName = (filesName: string[], indexPadStart: number): string[] => {
	return filesName.map(fileName => {
    if(!checkAlreadyHaveIndex(fileName, indexPadStart)) {
      return fileName
    }

		const fileNameSplit = fileName.split('-')
		fileNameSplit.splice(0, 1)

		return fileNameSplit.join('-')
	})
}

export const removeIndex = () => {
	try {
		const dirFilesName = getDirFilesName()

		const indexPadStart = getIndexPadStart(dirFilesName.length)

		const filesNameWithoutIndex = removeIndexInFileName(dirFilesName, indexPadStart)

		dirFilesName.forEach(dirFileName => {
			const fileNameWithIndexPosition = filesNameWithoutIndex.findIndex(fileName =>
				fileName === dirFileName.substring(indexPadStart + 1))

			if(fileNameWithIndexPosition === -1) return

			renameFile(dirFileName, filesNameWithoutIndex[fileNameWithIndexPosition])

			filesNameWithoutIndex.slice(fileNameWithIndexPosition, 1)
		})

	} catch(err) {
		console.error(err)
	}
}

removeIndex()
