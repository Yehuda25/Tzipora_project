import Link from 'next/link';
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
        <Link
          href='mailto:mail@yehuda-nehari.com'
           className='absolute bottom-1 left-[40%] z-50 text-white px-1 rounded cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500'
        >
          mail@yehuda-nehari.com
        </Link>
      </body>
    </html>
  )
}
