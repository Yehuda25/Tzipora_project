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
      </body>
    </html>
  )
}
