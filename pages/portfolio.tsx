import * as path from 'path'
import Head from 'next/head'
import Image from 'next/image'
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
              border: '1px solid hsl(0 0% 95%)',
            }}
          >
            <Image src={image} width={400} height={400} layout="responsive" />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export function getStaticProps() {
  const portfolioImages = getPortfolioFilePaths().map((filePath) => {
    return path.join('/', 'portfolio', filePath)
  })

  return { props: { portfolioImages } }
}