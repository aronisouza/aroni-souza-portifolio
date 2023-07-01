import './globals.scss'
import { Poppins } from 'next/font/google'

const inter = Poppins({ 
  subsets: ['latin'], 
  weight:['400', '500','600'] 
})

export const metadata = {
  title: 'Aroni Souza',
  description: 'Desenvolvedor Fullstack | Backend | PHP | C# .NETCore | HTML/CSS | JavaScript | ReactJS | Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
