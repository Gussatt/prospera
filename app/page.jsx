import Image from 'next/image'
import Header from '@/components/header'
import Carousel from '@/components/carousel/carousel'
import Intro from '@/components/intro'

export default function Home() {
  return (
    <main>
      <Header/>
      <Carousel/>
      <Intro />
    </main>
  )
}
