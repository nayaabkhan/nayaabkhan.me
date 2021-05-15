import * as fs from 'fs'
import * as path from 'path'
import Head from 'next/head'
import Link from 'next/link'
import matter from 'gray-matter'
import { getPostFilePaths } from '../../utils/posts'
import Container from '../../src/components/Container'

export default function BlogListing({ posts }) {
  return (
    <Container className="my-6">
      <Head>
        <title>Blog | Nayaab Khan</title>
      </Head>
      <h1 className="mb-4">Articles</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
              <a className="flex flex-col">
                <span>{post.frontmatter.title}</span>
                <small className="text-xs uppercase text-gray-500">
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
