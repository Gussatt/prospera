import Icon from "../public/assets/favicon.png";
import Image from "next/image";
import AppStore from "./props/appstore";
import IosImg from "../public/assets/icons/app-store.svg";
import AndroidImg from "../public/assets/icons/play-store.svg";
import { BiLogoInstagram, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

export default function Footer() {
  const urlApple = "https://www.apple.com/app-store/";
  const APKUrl = "https://play.google.com/store/apps/details?id=host";
  return (
    <footer className="mt-12 flex w-full flex-col flex-wrap justify-between bg-blue p-4 lg:flex-row">
      <section className="flex flex-col items-center justify-between lg:w-1/3">
        <a href="#">
          <Image
            src={Icon}
            className="h-40 w-40"
            alt="Ícone da prospera em azul e verde."
          />
        </a>

        <h4 tabIndex={0} className="mt-4 text-clamp-text text-header">
          Assine nossa {""}
          <strong className="bg-green transition-all hover:bg-transparent">
            newsletter!
          </strong>
        </h4>

        <div tabIndex={0} className="mt-4 w-10/12 lg:mt-0">
          <input tabIndex={0}
            placeholder="Insira seu e-mail"
            className="w-8/12 rounded-es-xl rounded-ss-xl border-2 border-r-0 border-header bg-transparent py-4 pl-2 pr-8 font-bold text-header"
          />
          <button tabIndex={0} className="w-4/12 rounded-ee-xl rounded-se-xl border-2 border-header p-4 text-header transition-all hover:bg-green">
            Envie
          </button>
        </div>
      </section>

      <section tabIndex={0} className="mt-8 flex flex-col items-center justify-between lg:mt-0 lg:w-1/3">
        <h4 className="text-clamp-title font-bold text-header ">
          Baixe o{" "}
          <strong className="bg-green transition-all hover:bg-transparent">
            app
          </strong>
        </h4>

        <div>
          <AppStore
            className={`mt-8 lg:mt-4`}
            icon={IosImg}
            title="Disponível na"
            text="App Store"
            url={urlApple}
          />
          <AppStore
            className={`mt-4`}
            icon={AndroidImg}
            title="Disponível na"
            text="Play Store"
            url={APKUrl}
          />
        </div>
      </section>

      <section className="mt-8 flex flex-col items-center justify-between lg:mt-0 lg:w-1/3">
        <h4 tabIndex={0} className="w-full text-center text-clamp-title font-bold text-header">
          <strong className="w-full bg-green transition-all hover:bg-transparent">
            Acompanhe-nos
          </strong>
        </h4>

        <div className="mt-8 flex w-full flex-row justify-evenly lg:mt-0">
          <a href="https://www.instagram.com/gussatt_/">
            <BiLogoInstagram
              size={56}
              color="#fafafa"
              className="rounded-xl transition-all hover:scale-150 hover:bg-green"
            />
          </a>
          <a href="https://www.instagram.com/gussatt_/">
            <BiLogoLinkedin
              size={56}
              color="#fafafa"
              className="rounded-xl transition-all hover:scale-150 hover:bg-green"
            />
          </a>
          <a href="https://www.instagram.com/gussatt_/">
            <BiLogoGithub
              size={56}
              color="#fafafa"
              className="rounded-xl transition-all hover:scale-150 hover:bg-green"
            />
          </a>
        </div>

        <div className="mt-8 flex w-full flex-col text-center lg:mt-0">
          <a href="#">
            <span className="text-clamp-text text-header">
              Nossa proteção de dados
            </span>
          </a>
          <a href="#">
            <span className="text-clamp-text text-header">
              Nossa política de privacidade
            </span>
          </a>
        </div>
      </section>
    </footer>
  );
}
