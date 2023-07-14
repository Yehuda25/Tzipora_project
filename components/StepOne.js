'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';



const StepOne = (props) => {

    const questions = [
        { id: 1, question: 'ספר/י לי על עצמך בבקשה'},
        { id: 2, question: 'מה הייתה הסיבה שהחלטת להגיש מועמדות למשרה זו'},
        { id: 3, question: 'מה המצב המשפחתי שלך?'},
        { id: 4, question: 'מה הייתה הסיבה שעזבת את העבודה הקודמת שלך?'},
        { id: 5, question: 'לאיזה הישגים הגעת בעבודה הקודמת?'},
        { id: 6, question: 'למה את/ה מעוניין/ת דווקא בעבודה הזאת?'},
        { id: 7, question: 'מה החוזקות והחולשות שלך?'},
        { id: 8, question: 'מה ציפיות השכר שלך?'},
    ];

    const [state, setState] = useState()

    return (
        <div className=''>

            <div className='absolute z-50 text-center w-[100%] flex justify-around'>

                <div className='flex flex-col'>
                    {questions.map((question, index) => {
                        if (index > 3) {
                            return <button className='text-2xl font-bold text-white bg-red-800 px-10 py-2 m-2 rounded cursor-pointer hover:bg-slate-600' onClick={() => setState(question)}> שאלה {index + 1} </button>
                        }
                    })}
                </div>

                <div>
                    <h1 className='text-black  font-bold text-[3rem]'> ראיון עבודה </h1>
                    <h2 className='text-[2rem] text-red-800 font-medium w-[40rem]'> {state && state.question} </h2>
                </div>

                <div className='flex flex-col'>
                    {questions.map((question, index) => {
                        if (index < 4 ) {
                            return <button className='text-2xl font-bold text-white bg-red-800 px-10 py-2 m-2 rounded cursor-pointer hover:bg-slate-600' onClick={() => setState(question)}> שאלה {index + 1} </button>
                        }
                    })}
                </div>

            </div>

            <div className=''>
                <Image className='object-cover' src='/assets/images/interview.jpg' fill />
            </div>

            <Link 
                className='absolute bottom-10 left-10 z-50 text-2xl font-bold text-white bg-gray-500 px-10 py-2 m-2 rounded-full cursor-pointer hover:bg-slate-600'
                href='/second'
            >
            {"<"} לשלב הבא 
            </Link>
            
        </div>
    )
}

export default StepOne