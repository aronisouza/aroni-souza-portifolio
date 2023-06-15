import Image from 'next/image'

export default function Home() {
  return (
    <main>
     <div>
        <Image
          src="/aroni.jpg"
          alt="Next.js Logo"
          width={200}
          height={150}
          priority
        />
      </div>
    </main>
  )
}
