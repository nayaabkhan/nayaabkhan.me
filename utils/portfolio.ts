import * as fs from 'fs'
import * as path from 'path'

export function getPortfolioFilePaths() {
  const portfolioFilePaths = fs
    .readdirSync(path.join('public', 'portfolio'), 'utf-8')
    .filter((f) => Boolean(path.extname(f).match(/\.(jpe?g|png|webp)$/)))

  return portfolioFilePaths
}
