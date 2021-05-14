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
        ></link>
      </Head>

      <Container blockSpacing="var(--space-xl)">
        <h1>Meditations</h1>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            fontFamily: 'La Belle Aurore, cursive',
            fontSize: '1.2rem',
            color: 'hsl(var(--palette-primary-30))',
          }}
        >
          {meditations
            .sort((a, b) => {
              return (
                Number(new Date(b.frontmatter.date)) -
                Number(new Date(a.frontmatter.date))
              )
            })
            .map((meditation, index) => (
              <li
                key={meditation.slug}
                style={{ marginBottom: 'var(--space-l)', padding: 0 }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <small
                    style={{
                      borderBottom: '1px solid hsl(var(--palette-accent-80))',
                      marginBottom: '-0.5rem',
                    }}
                  >
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
