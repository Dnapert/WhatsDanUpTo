import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../pages/nav';
import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import Head from 'next/head';

const App: AppType =({ Component, pageProps })=> {
  return <>
  <Head>
        <title>What's Dan Up To</title>
        <link rel="shortcut icon" href="http://localhost:3000/wdfavicon.ico" />
        <link rel="icon" sizes="64x64"href="/wdfavicon.ico" />
</Head> 
  <Nav />
  <Component {...pageProps} /></>
}

export default trpc.withTRPC(App)