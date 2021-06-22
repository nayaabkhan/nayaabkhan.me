import * as fs from 'fs'
import * as path from 'path'

export function getMeditationFilePaths() {
  return fs
    .readdirSync(path.join('meditations'), 'utf-8')
    .filter((f) => path.extname(f) === '.md')
}
