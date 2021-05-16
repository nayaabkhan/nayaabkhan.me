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
      <h1 className="mb-5">Articles</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
              <a className="flex flex-row items-start p-4 -mx-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-100">
                <img
                  alt="Illustration of the blog post"
                  src={`/posts/${post.slug}.png`}
                  width="64"
                  height="64"
                  className="mr-4"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">
                    {post.frontmatter.title}
                  </span>
                  <p className="text-gray-600 text-sm mt-3">{post.excerpt}…</p>
                  <span className="text-sm px-3 py-2 -mx-3 transition duration-300 ease-in-out bg-transparent hover:bg-primary-600 hover:text-white self-start rounded-md">
                    Read more →
                  </span>
                </div>
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

      const { data: frontmatter, excerpt } = matter(source, {
        excerpt: (file) => {
          // @ts-ignore
          file.excerpt = file.content.split('\n').slice(0, 5).join(' ').trim()
          // @ts-ignore
          return file.excerpt
        },
      })
      const slug = path.basename(filePath, '.mdx')

      return { slug, frontmatter, excerpt }
    })
    .sort((a, b) => {
      return (
        Number(new Date(b.frontmatter.date)) -
        Number(new Date(a.frontmatter.date))
      )
    })

  return { props: { posts } }
}
