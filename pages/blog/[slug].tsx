import * as React from 'react'
import * as fs from 'fs'
import * as path from 'path'
import Head from 'next/head'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import smartypants from '@silvenon/remark-smartypants'
import Container from '../../src/components/Container'
import CodeBlock from '../../src/components/CodeBlock'
import { getPostFilePaths } from '../../utils/posts'

const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
}

export default function BlogPost({ frontmatter, code }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code])

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

          <main className="py-4">
            <Component components={components} />
          </main>
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

  const result = await bundleMDX(source, {
    xdmOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), smartypants]
      return options
    },
  })

  return { props: { ...result } }
}
