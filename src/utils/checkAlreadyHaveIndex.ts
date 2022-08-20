export const checkAlreadyHaveIndex = (fileName: string, indexPadStart: number): boolean => {
  return !isNaN(parseInt(fileName.substring(0, indexPadStart)))
}
