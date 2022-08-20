import path from 'path'
import fs from 'fs'

import { ASSETS_DIR } from './constants'

export const renameFile = (oldFileName: string, newFileName: string): void => {
  fs.renameSync(
    path.resolve(ASSETS_DIR, oldFileName),
    path.resolve(ASSETS_DIR, newFileName)
  )
}
