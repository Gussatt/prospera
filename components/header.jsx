"use client";
import "../app/globals.css";
import Image from "next/image";
import Icon from "../public/assets/favicon.png";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import Login from "./login";
import SignUp from "./signup";
import Link from "next/link";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpen(false); // Close the menu when the viewport becomes full screen
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`bg-navbar absolute z-10 mg-auto top-8 bg-opacity-10 flex items-center justify-between w-11/12 rounded-3xl p-4 ${
        isOpen ? "rounded-b-none" : ""
      } lg:justify-evenly`}
    >
      <div className="flex items-center justify-center">
        <a href="#">
          <Image
            src={Icon}
            className="w-24 h-24"
            alt="Ícone da prospera em azul e verde."
          />
        </a>
      </div>

      <div
        className={`hidden w-full items-center justify-between menu ${
          isOpen ? "open" : ""
        } lg:flex`}
      >
        <ul
          className={`w-full flex flex-col items-center justify-start lg:flex-row`}
        >
          <li className="text-center mt-8 mb-2 mr-0 lg:mt-0 lg:ml-16 lg:mr-4 lg:mb-0">
            <span className="text-clamp-text font-bold text-header hover:bg-green transition-all">
              <Link href="/">Início</Link>
            </span>
          </li>
          <li className="text-center mb-2 mr-0 lg:mr-4 lg:mb-0">
            <span className="text-clamp-text font-bold text-header hover:bg-green transition-all ">
              <Link href="/sim"> Simulador </Link>
            </span>
          </li>
          <li className="text-center mb-2 mr-0 lg:mr-4 lg:mb-0">
            <span className="text-clamp-text font-bold text-header hover:bg-green transition-all ">
              <a href="#">Investimentos</a>
            </span>
          </li>
          <li className="text-center mb-2 lg:mb-0 ">
            <span className="text-clamp-text font-bold text-header hover:bg-green transition-all">
              <a href="#">Produtos</a>
            </span>
          </li>
        </ul>

        <ul className="flex flex-col justify-evenly lg:flex-row">
          <li className="text-center mb-2 lg:mb-0 lg:mr-8">
            <a href="#">
              <Login />
            </a>
          </li>
          <li className="text-center mb-4 lg:mb-0">
            <a href="#">
              <SignUp />
            </a>
          </li>
        </ul>
      </div>

      <div className="lg:hidden">
        <Hamburger
          color="#fafafa"
          size={32}
          label="Show menu"
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
    </header>
  );
}
