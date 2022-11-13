import Carousel from "./components/carousel"
import { trpc } from '../utils/trpc';
import Head from "next/head";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'client' });

  return (
    <div className='flex flex-col bg-black text-white items-center h-screen w-screen'>
      <Head>
        <title>What's Dan Up To</title>
        <link rel="shortcut icon" href="http://localhost:3000/wdfavicon.ico" />
        <link rel="icon" sizes="64x64"href="/wdfavicon.ico" />
</Head>      <div className="w-25 flex flex-col items-center">
        <h1 className='realtive items-center font-bold text-2xl'>
          Home
        </h1>
        <p>
          Welcome to WhatsDanUpTo.com
        </p>
        <p>An online portfolio of my work and hobbies.</p>
        <p>{hello.data? "hello":"no Data"}</p>
        <Carousel />
      </div>

    </div>
  )
}
