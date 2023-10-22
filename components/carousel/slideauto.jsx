"use client";
import React, { useState } from "react";
import Image from "next/image";
import Car1 from "../../public/assets/carousel/car1.jpg";
import Car2 from "../../public/assets/carousel/car2.jpg";
import Car3 from "../../public/assets/carousel/car3.jpg";
import Car4 from "../../public/assets/carousel/car4.jpg";
import Car5 from "../../public/assets/carousel/car5.jpg";
import Car6 from "../../public/assets/carousel/car6.jpg";
import Car7 from "../../public/assets/carousel/car7.jpg";
import Car8 from "../../public/assets/carousel/car8.jpg";

export default function SlideAuto({ id }) {
  const [isHovered, setIsHovered] = useState(false);
  const data = [
    {
      id: 1,
      img: Car1,
      text: "Invista em ações em tempo real",
      alt: "Tela de investimentos em um celular com um fundo preto",
    },
    {
      id: 2,
      img: Car2,
      text: "Compre suas criptomoedas dentro de nosso app com nossa carteira",
      alt: "Tela de investimentos em criptomoedas em um celular sendo segurado por uma mão masculina",
    },
    {
      id: 3,
      img: Car3,
      text: "Tenha o auxílio de profissionais em tutoriais simples de investimentos",
      alt: "Mulher de pele preta e cabelo crespo, com uma camisa branca e segurando um tablet",
    },
    {
      id: 4,
      img: Car4,
      text: "Nossa plataforma foi projetada para atender suas necessidades.",
      alt: "Homem de pele preta e cabelo crespo, com uma blusa preta e utilizando um MacBook",
    },
    {
      id: 5,
      img: Car5,
      text: "Acompahe seus papéis de forma portátil",
      alt: "Homem de pele branca e camisa branca utilizando um celular e um notebook para olhar um gráfico",
    },
    {
      id: 6,
      img: Car6,
      text: "Tenha os gráficos e números na palma da sua mão",
      alt: "Mão azul segurando um gráfico",
    },
    {
      id: 7,
      img: Car7,
      text: "Sorria com as suas escolhas",
      alt: "Homem de pele preta olhando uma tela e sorrindo",
    },
    {
      id: 8,
      img: Car8,
      text: "A plataforma que junta seus investimentos com as novas tecnologias",
      alt: "Celular e tela com gráficos azuis",
    },
  ];

  const selectedData = data.find((item) => item.id === id);

  return (
    <div
      className="relative flex h-full w-full items-end justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={selectedData.img}
        alt={selectedData.alt}
        priority={true}
        className="h-[40vh] w-full md:h-[50vh]"
      />
      <div
        className={`bg-gradient absolute mx-auto flex h-full w-full flex-col items-center justify-center ${
          isHovered ? "visible" : "hidden"
        } `}
      >
        <button className="w-1/2 border-2 border-header py-4 rounded-xl hover:bg-green transition-all">
          <span className="text-header">Saiba mais</span>
        </button>
        <p className="mt-8 text-center text-clamp-text text-header">
          {selectedData.text}
        </p>
      </div>
    </div>
  );
}
