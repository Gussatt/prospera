"use-client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import SlideAuto from "./slideauto";
import Slide from "./slide";

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
            breakpoints: {
              1024: {
                perPage: 3,
               
              },
              767: {
                perPage: 2,
            
              },
              640: {
                perPage: 1,
          
              },
            },
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              rewind: false,
              speed: .7,
            },
          }}
          // className="mt-12"
          extensions={{ AutoScroll }}
          aria-label="React Splide Example"
        >
          <SplideSlide className="overflow-hidden rounded-xl">
            <SlideAuto id={1} />
          </SplideSlide>
          <SplideSlide className="overflow-hidden rounded-xl">
            <SlideAuto id={2} />
          </SplideSlide>
          <SplideSlide className="overflow-hidden rounded-xl">
            <SlideAuto id={3} />
          </SplideSlide>
          <SplideSlide className="overflow-hidden rounded-xl">
            <SlideAuto id={4} />
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
            breakpoints: {
              1024: {
                perPage: 3,
               
              },
              767: {
                perPage: 2,
            
              },
              640: {
                perPage: 1,
          
              },
            },
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              rewind: false,
              speed: .7,
            },
          }}
          extensions={{ AutoScroll }}
          aria-label="React Splide Example"
        >
          <SplideSlide className="overflow-hidden rounded-xl">
            <SlideAuto id={5} />
          </SplideSlide>
          <SplideSlide className="overflow-hidden rounded-xl">
            <SlideAuto id={6} />
          </SplideSlide>
          <SplideSlide className="overflow-hidden rounded-xl">
            <SlideAuto id={7} />
          </SplideSlide>
          <SplideSlide className="overflow-hidden rounded-xl">
            <SlideAuto id={8} />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}
