'use client'
import Image from 'next/image';
import Header from '@/components/header';
import Carousel from '@/components/carousel/carousel';
import Intro from '@/components/intro';
import Cell from '@/components/cell';
import Simulator from '@/components/simulator';
import CarouselAuto from '@/components/carousel/carouselauto';
import Footer from '@/components/footer';
import VLibras from '@djpfs/react-vlibras';


export default function Home() {
  return (
    <>
      <Header/>
      <Carousel/>
      <main>
        {/* <Intro/>
        <Cell/>
        <Simulator/> */}
        <CarouselAuto/>
      </main>
      <VLibras forceOnload={true}/>
      <Footer />
    </>
  )
}
