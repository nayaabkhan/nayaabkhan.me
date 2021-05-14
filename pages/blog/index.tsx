import * as fs from 'fs'
import * as path from 'path'
import Head from 'next/head'
import Link from 'next/link'
import matter from 'gray-matter'
import { getPostFilePaths } from '../../utils/posts'
import Container from '../../src/components/Container'

export default function BlogListing({ posts }) {
  return (
    <Container blockSpacing="var(--space-xl)">
      <Head>
        <title>Blog | Nayaab Khan</title>
      </Head>
      <h1>Articles</h1>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.slug}
            style={{ marginBottom: 'var(--space-normal)', padding: 0 }}
          >
            <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
              <a style={{ display: 'flex', flexDirection: 'column' }}>
                <span>{post.frontmatter.title}</span>
                <small
                  style={{
                    color: 'hsla(0,0%,0%,0.5)',
                    fontSize: 'var(--text-s)',
                    textTransform: 'uppercase',
                  }}
                >
                  {post.frontmatter.date}
                </small>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export function getStaticProps() {
  const postFilePaths = getPostFilePaths()

  const posts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join('posts', filePath), 'utf-8')

      const { data: frontmatter } = matter(source)
      const slug = path.basename(filePath, '.mdx')

      return { slug, frontmatter }
    })
    .sort((a, b) => {
      return (
        Number(new Date(b.frontmatter.date)) -
        Number(new Date(a.frontmatter.date))
      )
    })

  return { props: { posts } }
}
