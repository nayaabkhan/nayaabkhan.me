import * as path from 'path'
import Head from 'next/head'
import Image from 'next/image'
import ColorThief from 'colorthief'
import Container from '../src/components/Container'
import { getPortfolioFilePaths } from '../utils/portfolio'

export default function Portfolio({ portfolioImages }) {
  return (
    <Container blockSpacing="var(--space-xl)">
      <Head>
        <title>Portfolio | Nayaab Khan</title>
      </Head>
      <h1>Portfolio</h1>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          fontFamily: 'La Belle Aurore, cursive',
          fontSize: '1.2rem',
          color: 'hsl(var(--palette-primary-30))',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gridGap: 'var(--space-normal)',
        }}
      >
        {portfolioImages.map((image) => (
          <li
            style={{
              padding: 0,
              borderRadius: '21px',
              overflow: 'hidden',
              border: `1px solid ${image.color}`,
            }}
          >
            <Image
              src={image.path}
              width={400}
              height={400}
              layout="responsive"
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export async function getStaticProps() {
  const portfolioImages = getPortfolioFilePaths().map(async (filePath) => {
    const imagePath = path.resolve(
      process.cwd(),
      'public',
      'portfolio',
      filePath
    )

    const color = await ColorThief.getColor(imagePath)

    return {
      color: `rgb(${color.join(',')})`,
      path: path.join('/', 'portfolio', filePath),
    }
  })

  return { props: { portfolioImages: await Promise.all(portfolioImages) } }
}
