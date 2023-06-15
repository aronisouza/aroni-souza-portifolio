import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aroni Souza',
  description: 'Desenvolvedor Fullstack | Backend | PHP | C# .NET Core | HTML/CSS | JavaScript | ReactJS | Typescript',
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
