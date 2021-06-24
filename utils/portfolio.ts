import * as fs from 'fs'
import * as path from 'path'

export function getPortfolioFilePaths() {
  return fs
    .readdirSync(path.join('portfolio'), 'utf-8')
    .filter((f) => path.extname(f) === '.mdx')
}
