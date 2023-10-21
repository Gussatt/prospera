'use client'
import Image from 'next/image';
import Header from '@/components/header';
import Carousel from '@/components/carousel/carousel';
import Intro from '@/components/intro';
import Cell from '@/components/cell';
import Simulator from '@/components/simulator';
import CarouselAuto from '@/components/carousel/carouselauto';
import Sim from './sim';
import Footer from '@/components/footer';


export default function Home() {
  return (
    <main>
      <Header/>
      <Carousel/>
      <Intro />
      <Cell />
      <Simulator />
      <CarouselAuto />
      {/* <Sim /> */}
      <Footer />
    </main>
  )
}
