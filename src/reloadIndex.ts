import fs from 'fs'

import { addIndex } from './addIndex'
import { removeIndex } from './removeIndex'
import { getIndexPadStart } from './utils/getIndexPadStart'
import { getDirFilesName } from './utils/getDirFilesName'
import { checkAlreadyHaveIndex } from './utils/checkAlreadyHaveIndex'

const reloadIndex = () => {
  const dirFilesName = getDirFilesName()

  const indexPadStart = getIndexPadStart(dirFilesName.length)

  if(checkAlreadyHaveIndex(dirFilesName[0], indexPadStart)) {
    removeIndex()
    addIndex()
  } else {
    addIndex()
  }
}

reloadIndex()
