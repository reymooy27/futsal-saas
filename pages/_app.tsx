import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { ReactElement } from 'react'
import { NextPage } from 'next'

const roboto = Inter({
  weight: '400',
  subsets: ['latin']
})

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <main className={`${roboto.className} h-screen`}>
      {getLayout(<Component {...pageProps} />)}
    </main>
  )
}
