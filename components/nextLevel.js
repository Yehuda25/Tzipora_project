



const NextLevel = ({setClick, from}) => {

  const text = 
    from !== 'front' ? 'ברכות!! עברת לשלב הבא ' :
    `המשחק שלנו נועד לסייע לסובלים מבעיית פחד הקהל ולעזור להתמודד איתה. 
    המשחק בנוי מחמישה שלבים שעולים בדרגות הקושי ולא מוגבלים בזמן.                                                                    בכל שלב יוצגו השאלות על גבי המסך ועל המשתמש לענות עליהן בקול רם.                                                                            
    מטרת המשחק היא לעזור ולהקל על בעיית פחד הקהל ואפילו לפתור אותה.                                                                        בסוף המשחק ינתן סקר קצר למילוי.                                                                                                                                                      הכניסה למשחק היא דרך מחשב בלבד`;

    const btn = from !== 'front' ? 'לשלב הבא' : 'בואו נתחיל';

    const style = from !== 'front' && 'text-[40px]';
    return (

        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="">
                    <div className="mt-3 text-right">
                      <h1 className={`font-semibold leading-6 text-center text-gray-900 ${style}`} id="modal-title"> {text}</h1> 
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button type="button" onClick={() => setClick(false)} className="w-full rounded-md bg-red-600 px-12 py-2  font-semibold text-white shadow-sm hover:bg-red-500"> {btn}</button>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
}

export default NextLevel