'use client'
import Header from "@/components/header"
import Carousel from "@/components/carousel/carousel"
import Sim from "./components/sim"
import CarouselAuto from "@/components/carousel/carouselauto"
import Footer from "@/components/footer"
import VLibras from '@djpfs/react-vlibras';

export default function Home(){
    return(
        <>
            <Header/>
            <Carousel/>
            <main>
                <Sim />
            </main>
            <VLibras forceOnload="true" />
            <Footer />
        </>
    )
}