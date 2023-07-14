import './globals.css'
import { Open_Sans } from 'next/font/google';

const open_Sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'הפרויקט של ציפורה',
  description: 'פרויקט זה נועד להציג את הפרויקט של ציפורה',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he">
      <body className={open_Sans.className}>
        {children}
        <div className='absolute bottom-2 left-[40%] z-50 text-base font-bold text-white px-10 py-2 m-2 cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500'>
          הפרוייקת של ציפורה נהרי
        </div>
      </body>
    </html>
  )
}
