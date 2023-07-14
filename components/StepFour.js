'use client'
import Image from 'next/image'
import Link from 'next/link';


const StepFour = (props) => {

    return (
        <div className=''>

            <div className='absolute z-50 text-center w-[100%] flex justify-center'>

                <div>
                    <h1 className='text-white  font-bold text-[3rem] bg-red-800 px-3 rounded'>  דיבור מול 20 איש בכיתה </h1>
                    <h2 className='text-[2rem] text-slate-100 font-bold bg-green-400 rounded px-4 mt-3'> ספר/י לנו על אירוע מיוחד שעברת לאחרונה </h2>
                </div>

            </div>

            <div className=''>
                <Image className='object-cover' src='/assets/images/classroom.jpg' fill />
            </div>

            <Link 
                className='absolute bottom-10 left-10 z-50 text-2xl font-bold text-white bg-red-700 px-10 py-2 m-2 rounded-full cursor-pointer hover:bg-slate-600'
                href='/fifth'
            >
                {"<"} שלב הבא 
            </Link>
            
            <Link href={'/'} className='absolute bottom-10 right-10 z-50 text-2xl font-bold text-black bg-red-100 px-10 py-1 m-1 rounded-full cursor-pointer hover:bg-slate-600'>
                חזרה לדף הבית
            </Link>
            
        </div>
    )
}

export default StepFour