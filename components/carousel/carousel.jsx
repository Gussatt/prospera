'use client';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import Slide from './slide';
import ImageCar from '../../public/assets/neural-bg.jpg'
import ImageCar1 from '../../public/assets/chart-bg.jpg'
import ImageCar2 from '../../public/assets/chart-bg1.jpg'

export default function Carousel() {
  return (
    <Splide options={ 
        { 
            rewind: true, 
            width: '100%',
            height: '100vh',
            type: 'loop',
            autoplay: true,
            arrows: false,
            interval: 4000,
            wheel: false,
            releaseWheel: true,
        } 
        } aria-label="Três slides com imagem de background e botão para criar sua conta!">
      <SplideSlide>
        <Slide 
          img={ImageCar}
          alt={`Rede neural em cor azul`}
          className="w-full h-full" 
        />
      </SplideSlide>
      <SplideSlide>
      <Slide 
          img={ImageCar1}
          alt={`Mão azul segurando gráfico de barras azul claro`}
          className="w-full h-full" 
        />
      </SplideSlide>
      <SplideSlide>
      <Slide 
          img={ImageCar2}
          alt={`Dashboard de gráficos com um desenho de uma montanha no centro`}
          className="w-full h-full" 
        />
      </SplideSlide>
    </Splide>
  );
}
