"use-client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import Car1 from "../../public/assets/carousel/car1.jpg";
import Car2 from "../../public/assets/carousel/car2.jpg";
import Car3 from "../../public/assets/carousel/car3.jpg";
import Car4 from "../../public/assets/carousel/car4.jpg";
import Car5 from "../../public/assets/carousel/car5.jpg";
import Car6 from "../../public/assets/carousel/car6.jpg";
import Car7 from "../../public/assets/carousel/car7.jpg";
import Car8 from "../../public/assets/carousel/car8.jpg";
import SlideAuto from "./slideauto";

export default function carouselAuto() {
  return (
    <section className="mt-12 flex flex-col">
      <div>
        <Splide
          options={{
            type: "loop",
            gap: "10px",
            autoHeight: true,
            perPage: 3,
            drag: "free",
            arrows: false,
            pagination: false,
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
          }}
          // className="mt-12"
          extensions={{ AutoScroll }}
          aria-label="React Splide Example"
        >
          <SplideSlide className="overflow-hidden rounded-xl">
            <SlideAuto 
              img={Car1}
              text={'Caralho, vem comigo porra'}
            />
          </SplideSlide>
          <SplideSlide className="overflow-hidden rounded-xl">
            <Image src={Car2} className="h-[40vh] w-full md:h-[50vh]" />
          </SplideSlide>
          <SplideSlide className="overflow-hidden rounded-xl">
            <Image src={Car3} className="h-[40vh] w-full md:h-[50vh]" />
          </SplideSlide>
          <SplideSlide className="overflow-hidden rounded-xl">
            <Image src={Car4} className="h-[40vh] w-full md:h-[50vh]" />
          </SplideSlide>
        </Splide>
      </div>

      <div className="mt-2 md:mt-4">
        <Splide
          options={{
            type: "loop",
            gap: "10px",
            autoHeight: true,
            perPage: 3,
            drag: "free",
            arrows: false,
            pagination: false,
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
          }}
          // className="mt-12"
          extensions={{ AutoScroll }}
          aria-label="React Splide Example"
        >
          <SplideSlide className="overflow-hidden rounded-xl">
            <Image src={Car5} className="h-[40vh] w-full md:h-[50vh]" />
          </SplideSlide>
          <SplideSlide className="overflow-hidden rounded-xl">
            <Image src={Car6} className="h-[40vh] w-full md:h-[50vh]" />
          </SplideSlide>
          <SplideSlide className="overflow-hidden rounded-xl">
            <Image src={Car7} className="h-[40vh] w-full md:h-[50vh]" />
          </SplideSlide>
          <SplideSlide className="overflow-hidden rounded-xl">
            <Image src={Car8} className="h-[40vh] w-full md:h-[50vh]" />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}
