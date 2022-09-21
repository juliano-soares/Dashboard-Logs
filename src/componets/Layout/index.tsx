import React from 'react'
import Head from 'next/head'
import { Footer } from '../Footer'
import { Sidebar } from '../Sidebar'

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Dashboard Logs</title>
      </Head>
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
