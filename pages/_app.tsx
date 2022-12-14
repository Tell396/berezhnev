import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/globals.css'
import 'highlight.js/styles/railscasts.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any

export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric): void {
  window.gtag('event', name, {
    event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  })
}

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const url = `https://berezhnev.vercel.app${router.route}`

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <DefaultSeo
        titleTemplate="%s - Vladimir Berezhnev"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url,
          description: 'The personal website for Vladimir Berezhnev, developer.',
          site_name: 'Vladimir Berezhnev | berezhnev.vercel.app',
          images: [],
        }}
        canonical={url}
      />
      <Header />
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default MyApp
