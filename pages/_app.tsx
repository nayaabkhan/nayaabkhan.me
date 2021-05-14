import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../src/components/Layout'
import CodeBlock from '../src/components/CodeBlock'
import '../styles/globals.css'

const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  )
}

export default MyApp
