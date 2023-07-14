'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';



const StepTwo = (props) => {

    const questions = [
        { id: 1, question: 'מה איתך? איך את/ה מרגיש/ה?'},
        { id: 2, question:'איך בעבודה? התחלת עבודה חדשה?'},
        { id: 3, question: 'את/ה לומד משהו?'},
        { id: 4, question: 'את/ה עובד?'},
        { id: 5, question: 'מה את/ה עושה בחיים?'},
        { id: 6, question: 'את/ה רווק/נשוי?'},
        { id: 7, question: 'יש לך ילדים?'},
    ];

    const [state, setState] = useState();

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
                    <h1 className='text-black  font-bold text-[3rem]'> שיחה עם שני אנשים </h1>
                    <h2 className='text-[2rem] text-red-800 font-bold w-[40rem]'> {state && state.question} </h2>
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
                <Image className='object-cover' src='/assets/images/two.jpg' fill />
            </div>

            <Link 
                className='absolute bottom-10 left-10 z-50 text-2xl font-bold text-white bg-red-700 px-10 py-2 m-2 rounded-full cursor-pointer hover:bg-slate-600'
                href='/third'
            >
                {"<"} שלב הבא 
            </Link>

            <Link href={'/'} className='absolute bottom-10 right-10 z-50 text-2xl font-bold text-black bg-red-100 px-10 py-1 m-1 rounded-full cursor-pointer hover:bg-slate-600'>
                חזרה לדף הבית
            </Link>
            
        </div>
    )
}

export default StepTwo