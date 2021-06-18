import * as fs from 'fs'
import * as path from 'path'
import Head from 'next/head'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import matter from 'gray-matter'
import smartypants from '@silvenon/remark-smartypants'
import { getMeditationFilePaths } from '../utils/meditations'
import Container from '../src/components/Container'

export default function Meditations({ meditations }) {
  return (
    <>
      <Head>
        <title>Meditations | Nayaab Khan</title>
        <link
          href="https://fonts.googleapis.com/css?family=La+Belle+Aurore&display=swap"
          rel="stylesheet"
         />
      </Head>

      <Container className="my-6">
        <h1 className="mb-5">Meditations</h1>
        <ul className="font-script text-primary-600 text-xl">
          {meditations
            .sort((a, b) => {
              return (
                Number(new Date(b.frontmatter.date)) -
                Number(new Date(a.frontmatter.date))
              )
            })
            .map((meditation, index) => (
              <li key={meditation.slug} className="mb-5">
                <div className="flex flex-col">
                  <small className="border-b border-accent-200 -mb-3">
                    #{meditations.length - index} {meditation.frontmatter.date}
                  </small>
                  {hydrate(meditation.post)}
                </div>
              </li>
            ))}
        </ul>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const meditationFilePaths = getMeditationFilePaths()

  const meditations = meditationFilePaths.map(async (filePath) => {
    const source = fs.readFileSync(path.join('meditations', filePath), 'utf-8')

    const { content, data: frontmatter } = matter(source)
    const slug = path.basename(filePath, '.mdx')

    const post = await renderToString(content, {
      mdxOptions: {
        remarkPlugins: [smartypants],
      },
    })

    return { slug, frontmatter, post }
  })

  return { props: { meditations: await Promise.all(meditations) } }
}
