import * as React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props: React.PropsWithChildren<{}>) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />

      <main
        role="main"
        style={{ backgroundColor: 'white', flexGrow: 1 }}
        {...props}
      />

      <Footer />
    </div>
  )
}
