import Image from 'next/image';


export default function Slide({img, alt}){

    return(
        <div className="flex flex-col bg-neural-bg justify-center items-center bg-center bg-no-repeat relative bg-cover sm:items-start">
            <Image
                src={img}
                alt={alt}
                className='w-screen h-screen' 
            />

            <div className='absolute w-10/12 ml-0 mx-auto flex text-center flex-col sm:text-left sm:w-5/12 sm:ml-[4.166666%]'>
                <h3 className='text-clamp-headline text-header font-bold'>
                    Venha conhecer nosso <strong className='bg-green hover:bg-transparent transition-all'> CDB à 200% do CDI </strong>
                </h3>

                <button className='w-full bg-transparent border-header py-4 border-solid border-4 rounded-xl mt-20 hover:bg-green transition-all'>
                    <strong className='text-clamp-title font-bold text-header'> 
                        Crie sua conta!
                    </strong>
                </button>
            </div>
        </div>
    )
}