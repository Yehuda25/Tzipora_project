'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';



const StepFive = (props) => {

    const questions = [
        { id: 5, style: '-ml-[22rem] mt-20', question: 'איך ניתן לשפר את העבודה לדעתך?'},
        { id: 4, style: '-ml-[12rem] mt-24', question: 'מה הציפיות שלך מהעבודה?'},
        { id: 3, style: 'ml-[6rem] mt-24', question: 'השכר נוח לך?'},
        { id: 2, style: 'ml-[30rem] mt-36', question: 'מה ההספקים שלך עד עכשיו?'},
        { id: 1, style: 'ml-[65rem] mt-10', question: 'את/ה מרוצה מהעבודה?'},
    ];

    const [state, setState] = useState();

    const handleDone = () => {
        alert('כל הכבוד! סיימת את השלב החמישי');
        window.location.href="https://forms.gle/LSS6S5q5a2dqNESh9";  
    }

    return (
        <div className=''>

            <div className='absolute z-50 text-center w-[100%] '>

                <div className=''>
                    {questions.map((question, index) => {
                        return <button className='text-2xl font-bold text-white bg-red-800 px-10 py-2 m-2 rounded cursor-pointer hover:bg-slate-600' onClick={() => setState(question)}> שאלה {question.id} </button>
                    })}
                </div>

                <div>
                    <h1 className='text-black  font-bold text-[3rem]'> שיחה עם מנהלים בכירים </h1>
                    <h2 className={` text-[2rem] text-slate-100 font-bold w-[40rem]'`}> {state && state.question} </h2>
                </div>

            </div>

            <div className=''>
                <Image className='object-cover' src='/assets/images/manager.jpg' fill />
            </div>

            <div 
                className='absolute bottom-10 left-10 z-50 text-2xl font-bold text-white bg-green-500 px-10 py-2 m-2 rounded-full cursor-pointer hover:bg-slate-600'
                onClick={handleDone}
            >
                !סיימתי
            </div>
            
            <Link href={'/'} className='absolute bottom-10 right-10 z-50 text-2xl font-bold text-black bg-red-100 px-10 py-1 m-1 rounded-full cursor-pointer hover:bg-slate-600'>
                חזרה לדף הבית
            </Link>
            
        </div>
    )
}

export default StepFive