import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Container from '../src/components/Container'

export default function Home() {
  return (
    <Container blockSpacing="var(--space-xl)">
      <Head>
        <title>Nayaab Khan | Designer | Developer</title>
      </Head>
      <h1 style={{ fontSize: 'var(--text-xxl)', textAlign: 'center' }}>
        Hi, I’m Nayaab!
      </h1>
      <div style={{ columnCount: 2 }}>
        <p>
          I’m a happy generalist—a delectable blend of a visual designer,
          programmer, project manager, product thinker, and more. It helps me
          ship work - with impact, rigor, and enjoyment - all the way over the
          line&nbsp;🏁.
        </p>
        <p>
          This is my personal space on the internet where I{' '}
          <Link href="/blog">
            <a>write</a>
          </Link>{' '}
          about JavaScript, design, and web development. I also document my{' '}
          <Link href="/meditations">
            <a>meditations</a>
          </Link>{' '}
          here.
        </p>
      </div>
    </Container>
  )
}
