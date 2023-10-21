"use client";
import "../app/globals.css";
import { BiUser } from "react-icons/bi";

export default function SignUp() {
  return (
    <>
      <div className="flex bg-green p-2 mb-2 lg:mb-0 hover:bg-transparent transition-all">
        <div className="flex items-center justify-between">
          <span className="text-clamp-label text-header font-bold mr-4 whitespace-nowrap">
            Cadastre-se!
          </span>

          <div>
            <BiUser size={32} color="#fafafa" />
          </div>
        </div>
      </div>
    </>
  );
}
