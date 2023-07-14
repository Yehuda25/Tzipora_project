import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (

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

    </div>
  )
}
