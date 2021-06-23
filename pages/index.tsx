import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Container from '../src/components/Container'

export default function Home() {
  return (
    <Container className="my-6">
      <Head>
        <title>Nayaab Khan | Designer | Developer</title>
      </Head>
      <header className="flex flex-col items-center text-center">
        <div className="relative rounded-full overflow-hidden w-7 h-7 shadow-md">
          <Image src="/me.jpeg" layout="fill" />
        </div>
        <h1>Nayaab Khan</h1>
        <h2 className="font-normal text-xl text-gray-500 mt-0">
          A Delectable Blend of Designer &amp; Developer
        </h2>
      </header>

      <main>
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
      </main>
    </Container>
  )
}
