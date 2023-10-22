"use client";
import React from "react";
import ImageHand from "../public/assets/mockup-cell.png";
import Image from "next/image";
import AppStore from "./props/appstore";
import IosImg from "../public/assets/icons/app-store.svg";
import AndroidImg from "../public/assets/icons/play-store.svg";

export default function Cell() {
  const urlApple = "https://www.apple.com/app-store/";
  const APKUrl = "https://play.google.com/store/apps/details?id=host";
  return (
    <section className="bg-blue flex justify-evenly py-8 mt-24 flex-col md:flex-row">
      <div className="w-8/12 mx-auto flex justify-between flex-col items-center md:flex-row">
        <div className="flex flex-col h-full w-full items-center justify-between md:items-start md:w-3/6">
          <h3 tabIndex={0} className="text-clamp-headline text-header text-center md:text-left">
            Seus {""}
            <strong className="font-bold bg-green hover:bg-transparent transition-all">
              investimentos
            </strong> {""}
            no seu bolso {""}
            <strong className="font-bold bg-green hover:bg-transparent transition-all">
              o tempo todo
            </strong>
          </h3>

          <div>
            <AppStore
              className={`mt-8 md:mt-4 lg:mt-0`}
              icon={IosImg}
              title="Disponível na"
              text="App Store"
              url={urlApple}
              aria-label={"Botão da App Store."}
            />
            <AppStore
              className={`mt-4`}
              icon={AndroidImg}
              title="Disponível na"
              text="Play Store"
              url={APKUrl}
              aria-label={"Botão da Play Store."}
            />
          </div>
        </div>
        <div className="w-4/6 flex mt-8 flex-col items-center justify-end md:mt-0 md:w-4/12 md:h-full lg:h-[40vw]">
          <Image
            src={ImageHand}
            alt="Celular com background da página "
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
