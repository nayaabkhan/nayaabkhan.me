import * as fs from 'fs'
import * as path from 'path'
import Head from 'next/head'
import Link from 'next/link'
import matter from 'gray-matter'
import Container from '../../src/components/Container'
import PageHeading from '../../src/components/PageHeading'
import { getPortfolioFilePaths } from '../../utils/portfolio'

export default function Portfolio({ posts }) {
  return (
    <Container className="my-4 divide-y divide-gray-200">
      <Head>
        <title>Portfolio | Nayaab Khan</title>
      </Head>

      <PageHeading
        title="Portfolio"
        description="Some of my select work and a peek at my process."
      />

      <ul className="divide-y divide-gray-200">
        {posts
          .sort((a, b) => {
            return (
              Number(new Date(b.frontmatter.date)) -
              Number(new Date(a.frontmatter.date))
            )
          })
          .map((post) => (
            <li key={post.slug}>
              <article>
                <Link as={`/portfolio/${post.slug}`} href={`/portfolio/[slug]`}>
                  <a className="my-5 flex flex-wrap md:flex-nowrap gap-5 items-start">
                    <img
                      src={'/' + post.frontmatter.thumbnail}
                      className="w-7 h-7 flex-none rounded-lg object-cover"
                    />

                    <main className="flex flex-col">
                      <span className="font-bold text-lg">
                        {post.frontmatter.title}
                      </span>
                      <p className="text-gray-500 mt-3">{post.excerpt}</p>
                      <span className="px-3 py-2 -mx-3 transition duration-300 ease-in-out bg-transparent text-primary-500 text-sm hover:bg-primary-600 hover:text-white self-start rounded-md">
                        Read more →
                      </span>
                    </main>
                  </a>
                </Link>
              </article>
            </li>
          ))}
      </ul>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = getPortfolioFilePaths().map(async (filePath) => {
    const source = fs.readFileSync(path.join('portfolio', filePath), 'utf-8')

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

  return { props: { posts: await Promise.all(posts) } }
}
