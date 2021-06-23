import * as path from 'path'
import Head from 'next/head'
import ColorThief from 'colorthief'
import Container from '../src/components/Container'
import PageHeading from '../src/components/PageHeading'
import { getPortfolioFilePaths } from '../utils/portfolio'

export default function Portfolio({ portfolioImages }) {
  return (
    <Container className="my-6">
      <Head>
        <title>Portfolio | Nayaab Khan</title>
      </Head>

      <PageHeading
        title="Portfolio"
        description="Some of my select work and a peek at my process."
      />

      <ul className="grid grid-cols-repeat-auto-fill gap-4 ">
        {portfolioImages.map((image, i) => (
          <li
            key={i}
            className="rounded-3xl overflow-hidden border"
            style={{
              borderColor: image.color,
            }}
          >
            <img src={image.path} width={400} height={400} />
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
