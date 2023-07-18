'use client'
import Image from 'next/image'
import Link from 'next/link'
import NextLevel from '@/components/nextLevel'
import { useState } from 'react';

export default function Home() {
  const [open, setClick] = useState(true);


  return (
<>
      {open ? <NextLevel setClick={setClick} from="front" />

      :
      <div className=''>

      <div className='absolute z-50  text-center w-[100%]'>

        <div>
          <h1 className='text-red-900 font-bold text-[4rem] my-5 bg-slate-400 w-fit m-auto px-5 rounded'> התמודדות עם פחד קהל </h1>
        </div>
      
        <div className='mb-3'>
          <Link href={'/first'} className="text-4xl bg-red-800 font-bold text-center border px-10 py-2 m-2 rounded cursor-pointer hover:bg-slate-600"> שלב 1 </Link>
          <Link href={'/second'} className="text-4xl bg-red-800 font-bold text-center border px-10 py-2 m-2 rounded cursor-pointer hover:bg-slate-600"> שלב 2 </Link>
          <Link href={'/third'} className="text-4xl bg-red-800 font-bold text-center border px-10 py-2 m-2 rounded cursor-pointer hover:bg-slate-600"> שלב 3 </Link>
          <Link href={'/fourth'} className="text-4xl bg-red-800 font-bold text-center border px-10 py-2 m-2 rounded cursor-pointer hover:bg-slate-600"> שלב 4 </Link>
          <Link href={'/fifth'} className="text-4xl bg-red-800 font-bold text-center border px-10 py-2 m-2 rounded cursor-pointer hover:bg-slate-600"> שלב 5 </Link>
        </div>  

      </div>

      <div className=''>
          <video className='object-cover h-[100vh] w-[100%]' src='/assets/videos/front.mp4' autoPlay loop muted />
      </div>

      <div className=' absolute  bottom-10 left-5 bg-neutral-500 p-5 rounded text-right'>
        <h3 className='text-[2rem] text-black'> מגישות </h3>
        <ul>
          <li className='text-xl font-bold text-lime-500'> ציפורה נהרי  <span className='text-black'> 329006241 </span> </li>
          <li className='text-xl font-bold text-lime-500'> יוטל מלול    <span className='text-black'> 327225546 </span>  </li>
          <li className='text-xl font-bold text-lime-500'> פייגי שאזו   <span className='text-black'> 324858265 </span>  </li>
          <li className='text-xl font-bold text-lime-500'> מיטל אל יעקב <span className='text-black'> 212625719 </span>  </li>
        </ul>
      </div>
      </div>

  }
</>
  )
}