import fs from 'fs'

import { ASSETS_DIR } from './constants'

export const getDirFilesName = (): string[] => {
  return fs.readdirSync(ASSETS_DIR)
}