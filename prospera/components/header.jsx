'use client';
import '../app/globals.css'
import Image from "next/image";
import Icon from "../public/assets/favicon.png"
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from "react";
import { BiUser } from 'react-icons/bi';

export default function Header() {
    
    const [isOpen, setOpen] = useState(false);
    
    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    return (

		<header className={`bg-header bg-opacity-10 flex items-center justify-between w-11/12 mx-auto mt-8 rounded-3xl p-4 ${isOpen ? 'rounded-b-none' : ''}` }>
			<div className="flex items-center justify-center">
				<Image 
					src={Icon}
					className="w-24 h-24"
					alt="Ícone da prospera em azul e verde." 
				/>
			</div>

			<div className='flex '>
				<ul className={`w-full hidden justify-evenly menu ${isOpen ? 'open' : ''} lg:flex`} >
					<li className='text-center mr-2 mb-2 xl:mr-4 mb-0'>
                        <span className='text-clamp-text font-bold text-header '>
                            Ínicio
                        </span>
                    </li>
                    <li className='text-center mr-2 mb-2 xl:mr-4 mb-0'>
                        <span className='text-clamp-text font-bold text-header'>
                            Simulador
                        </span>
                    </li>
                    <li className='text-center mr-2 mb-2 xl:mr-4 xl:mb-0'>
                        <span className='text-clamp-text font-bold text-header '>
                            Investimento
                        </span>
                    </li>
                    <li className='text-center mb-2 xl:mb-0'>
                        <span className='text-clamp-text font-bold text-header'>
                            Produtos
                        </span>
                    </li>
				</ul>

                <div className='flex bg-green'>
                    <div className=''>
                        <span className='text-clamp-label'>

                        </span>

                        <div>
                            <BiUser className='w-10'/>
                        </div>
                    </div>
                </div>
			</div>

            <div className='lg:hidden'>
                <Hamburger color='#fafafa' size={32} label="Show menu" toggled={isOpen} toggle={setOpen} />
            </div>
            
            
		</header>
	)
}
