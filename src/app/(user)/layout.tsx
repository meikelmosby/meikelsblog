import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import BlogHeader from "@/app/_components/BlogHeader";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meikel\'s Blog',
  description: 'Everything Tech, Teams & Building Things',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-7xl mx-auto`}>
      <BlogHeader/>
      {children}
      </body>
    </html>
  )
}
