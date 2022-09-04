import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
import { Layout } from '../src'

const Home: NextPage = () => {
  const fetcher = (url: string) => fetch(url).then(res => res.json())

  const {data, error} = useSWR('', fetcher)
  return (
    <Layout>
      <div className='flex flex-col gap-3'>
        {/* <h1 className='text-8xl font-dm-serif-display text-[#111111] font-semibold'>Building beautiful web experiences</h1> */}
        {/* <h1 className='text-8xl font-roboto text-[#111111] font-black tracking-tighter'>Building beautiful web experiences</h1> */}

        <h1 className='text-7xl font-roboto text-[#212429] font-black tracking-tighter'>Building beautiful web experiences</h1>

        {/* <p className='text-2xl text-gray-700 mt-4 font-fira-sans'>a web developer, sometimes designer. Passionate about user interfaces, interactions, design systems, web experiences and closing the gap between design and development</p> */}
        <p className='text-2xl font-roboto text-[#212429] font-normal pr-28'>a web developer, <span className='underline underline-offset-4 decoration-1 font-light'>sometimes designer</span>. Passionate about user interfaces, interactions, design systems, web experiences and closing the gap between design and development</p>

        {/* <button type='button' onClick={() => console.log("Clicked")} className="block bg-black w-fit px-14 py-4 mt-6 text-white text-2xl rounded-md font-semibold font-fira outline-none hover:ring-4 hover:ring-offset-2 hover:ring-black ease-linear duration-300">My Work</button> */}
       
        {/* <h1 className='text-9xl font-fira-sans font-semibold'>Building Beautiful Web Experiences</h1>
        <h1 className='text-9xl font-fira-sans-condensed font-semibold'>Building Beautiful Web Experiences</h1>
        <h1 className='text-9xl font-dm-sans font-semibold'>Building Beautiful Web Experiences</h1>
        <h1 className='text-9xl font-dm-serif-display font-semibold bg-clip-text text-transparent bg-gradient-to-br from-black to-teal-600'>Building Beautiful Web Experiences</h1>
        <h1 className='text-9xl font-play-fair font-black'>Building Beautiful Web Experiences</h1> */}

<div>
        {[1, 2, 3, 4].map((n: number) => (<>
          <div key={n} className={`mt-72 w-full h-96 rounded-md cursor-pointer ease-linear duration-300 border flex ${n % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className='w-full flex flex-col gap-3 justify-center rounded-tl-md rounded-bl-md'>
            <h3 className='text-4xl font-black font-roboto tracking-tight px-20'>StarBucks UI Clone</h3>
            <p className='text-lg font-roboto px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ab eligendi.</p>
          </div>
          <div className='w-full relative rounded-tr-md rounded-br-md'>
          <Image src="/pexels-life-of-pix.jpg"
            alt="project image" layout='fill' objectFit='cover' className='rounded-tr-md rounded-br-md' />
            {/* <Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2plY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="project image" layout='fill' objectFit='cover' /> */}
          </div>
        </div>
        <hr className='mt-52'></hr></>
        ))}</div>
      </div>
    </Layout>
  )
}

export default Home
