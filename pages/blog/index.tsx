import * as fs from 'fs'
import * as path from 'path'
import Head from 'next/head'
import Link from 'next/link'
import matter from 'gray-matter'
import { getPostFilePaths } from '../../utils/posts'
import Container from '../../src/components/Container'
import PageHeading from '../../src/components/PageHeading'

export default function BlogListing({ posts }) {
  return (
    <Container className="my-4 divide-y divide-gray-200">
      <Head>
        <title>Blog | Nayaab Khan</title>
      </Head>

      <PageHeading
        title="Latest"
        description="The latest posts on design and code."
      />

      <ul className="divide-y divide-gray-200">
        {posts.map((post) => (
          <li key={post.slug}>
            <article>
              <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
                <a className="flex items-baseline py-5">
                  <div className="flex-shrink-0 pr-5 text-sm font-medium text-gray-500">
                    <time
                      dateTime={new Date(post.frontmatter.date).toISOString()}
                    >
                      {post.frontmatter.date}
                    </time>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">
                      {post.frontmatter.title}
                    </span>
                    <p className="text-gray-500 mt-3">{post.excerpt}…</p>
                    <span className="px-3 py-2 -mx-3 transition duration-300 ease-in-out bg-transparent text-primary-500 hover:bg-primary-600 hover:text-white self-start rounded-md">
                      Read more →
                    </span>
                  </div>
                </a>
              </Link>
            </article>
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
