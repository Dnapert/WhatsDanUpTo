import Carousel from "./components/carousel"

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_AWS_BUCKET_NAME)
  return (
    <div className='flex flex-col bg-black text-white items-center h-screen w-screen'>
      <div className="w-25 flex flex-col items-center">
        <h1 className='realtive items-center font-bold text-2xl'>
          Home
        </h1>
        <p>
          Welcome to WhatsDanUpTo.com
        </p>
        <p>An online portfolio of my work and hobbies.</p>
        <Carousel />
      </div>

    </div>
  )
}
