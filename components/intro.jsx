import Image from "next/image"
import ImageMan from "../public/assets/trading-vert.jpg"
import { AiOutlineLineChart } from 'react-icons/ai'

export default function Intro(){
	return(
		<section className="flex w-11/12 mx-auto items-center justify-evenly mt-12 flex-col md:items-start md:flex-row">
			<div className="flex flex-col h-full flex-1 w-5/6 md:w-2/6">
				<h3 className="text-clamp-title text-header text-center md:text-left">
					<strong className="font-bold bg-green hover:bg-transparent transition-all">Acreditamos</strong> em <strong className="font-bold bg-green hover:bg-transparent transition-all">você livre</strong> 
				</h3>

				<h3 className="text-clamp-title text-header mt-12 text-center md:mt-24 md:text-left">
					<strong className="font-bold bg-green hover:bg-transparent transition-all">Esqueça</strong> taxas de corretagem
				</h3>
				
                <h3 className="text-clamp-title text-header mt-12 text-center md:mt-24 md:text-left">
					Venha <strong className="bg-green hover:bg-transparent transition-all">prosperar!</strong>
				</h3>
			</div>

			<div className="w-5/6 h-[50vh] flex mt-8 flex-1 flex-col justify-end relative md:mt-0 md:w-2/6 md:h-[100vh]">
				<Image 
					src={ImageMan}
					alt='Um homem de pele preta utilizando um celular e um computador em uma plataforma de investimento'
					className="rounded-xl h-full"
				/>
				<div className="flex flex-col items-center justify-between bg-blue h-56 w-6/12 rounded-xl absolute bottom-[-4rem] p-4 left-5 md:w-5n/12 md:left-8 lg:left-[-4rem] ">
					<h4 className="text-center text-clamp-label font-bold text-header">
						Meu portfólio
					</h4>

					<span className="text-center text-clamp-label text-header">
						<strong className="font-bold"> Investimentos </strong> 
						<br />
						R$ 3.500,00
					</span>

                    <AiOutlineLineChart 
                        color="#fafafa"
                        size={48}
                    />
				</div>
			</div>

		</section>
	)
}
