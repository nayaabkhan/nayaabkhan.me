import * as fs from 'fs'
import * as path from 'path'

export function getPostFilePaths() {
  return fs
    .readdirSync(path.join('posts'), 'utf-8')
    .filter((f) => path.extname(f) === '.mdx')
}
