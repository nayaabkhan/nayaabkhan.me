import * as React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="bg-white flex-grow" role="main" {...props} />

      <Footer />
    </div>
  )
}
