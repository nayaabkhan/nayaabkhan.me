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
    <>
      <Head>
        <title>{frontmatter.title} | Nayaab Khan</title>
      </Head>

      <Container>
        <article className="flex flex-col post divide-y divide-gray-200">
          <header className="flex flex-col items-center my-5 mx-0 text-center">
            <h1 className="text-5xl mt-5 mb-4">{frontmatter.title}</h1>
            <small className="text-xs text-gray-500 tracking-widest uppercase">
              {frontmatter.date}
            </small>
          </header>

          <main className="py-4">{content}</main>
        </article>
      </Container>
    </>
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
