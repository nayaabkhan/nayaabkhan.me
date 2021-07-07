import * as React from 'react'
import * as fs from 'fs'
import * as path from 'path'
import Head from 'next/head'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import smartypants from '@silvenon/remark-smartypants'
import { getMeditationFilePaths } from '../utils/meditations'
import Container from '../src/components/Container'
import PageHeading from '../src/components/PageHeading'

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

      <Container className="my-4">
        <PageHeading
          title="Meditations"
          description="Some philosophical scribbles."
        />

        <ul className="font-script text-primary-600 text-xl">
          {meditations
            .sort((a, b) => {
              return (
                Number(new Date(b.frontmatter.date)) -
                Number(new Date(a.frontmatter.date))
              )
            })
            .map((meditation, index) => {
              const Component = React.useMemo(
                () => getMDXComponent(meditation.code),
                [meditation.code]
              )

              return (
                <li key={meditation.slug} className="mb-5">
                  <div className="flex flex-col">
                    <small className="border-b border-accent-200 -mb-3">
                      #{meditations.length - index}{' '}
                      {meditation.frontmatter.date}
                    </small>
                    <Component />
                  </div>
                </li>
              )
            })}
        </ul>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const meditationFilePaths = getMeditationFilePaths()

  const meditations = meditationFilePaths.map(async (filePath) => {
    const source = fs.readFileSync(path.join('meditations', filePath), 'utf-8')
    const slug = path.basename(filePath, '.mdx')

    const result = await bundleMDX(source, {
      xdmOptions(options) {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), smartypants]
        return options
      },
    })

    return { slug, ...result }
  })

  return { props: { meditations: await Promise.all(meditations) } }
}
