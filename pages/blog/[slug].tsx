import * as fs from 'fs'
import * as path from 'path'
import Head from 'next/head'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import matter from 'gray-matter'
import smartypants from '@silvenon/remark-smartypants'
import Container from '../../src/components/Container'
import { getPostFilePaths } from '../../utils/posts'

export default function BlogPost({ frontmatter, post }) {
  const content = hydrate(post)
  return (
    <article style={{ display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>{frontmatter.title} | Nayaab Khan</title>
      </Head>
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          margin: 'var(--space-xl) 0',
          textAlign: 'center',
        }}
      >
        <Container>
          <a
            href="#"
            style={{
              textTransform: 'uppercase',
              fontSize: 'var(--text-xs)',
              backgroundColor: 'hsl(var(--palette-primary-50))',
              padding: '0 var(--space-s)',
              color: 'white',
              borderRadius: '9999px',
              fontWeight: 900,
              boxShadow: '0 3px 2px -1px hsla(var(--palette-primary-30), 30%)',
            }}
          >
            {frontmatter.hashtags[0]}
          </a>
          <h1>{frontmatter.title}</h1>
          <small
            style={{
              fontSize: 'var(--text-xs)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            {frontmatter.date}
          </small>
        </Container>
        <hr
          style={{
            marginTop: 'var(--space-l)',
          }}
        />
      </header>
      <main>
        <Container>{content}</Container>
      </main>
    </article>
  )
}

export async function getStaticPaths() {
  const postFilePaths = getPostFilePaths()

  const paths = postFilePaths.map((filePath) => ({
    params: { slug: path.basename(filePath, '.mdx') },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join('posts', params.slug + '.mdx'),
    'utf-8'
  )

  const { content, data: frontmatter } = matter(source)

  const post = await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [smartypants],
    },
  })

  return { props: { frontmatter, post } }
}
