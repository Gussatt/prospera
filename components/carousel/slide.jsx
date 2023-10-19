import Image from 'next/image';


export default function Slide({img, alt}){

    return(
        <div className="flex flex-col justify-center bg-neural-bg bg-center bg-no-repeat bg-cover">
            <Image
                src={img}
                alt={alt}
                className='w-screen h-screen' 
            />

            <div className='absolute w-8/12 left-[5%] md:w-5/12'>
                <h3 className='text-clamp-title text-header font-bold'>
                    Venha conhecer nosso <strong className='bg-green hover:bg-transparent transition-all'> CDB à 200% do CDI </strong>
                </h3>

                <button className=' bg-transparent border-header p-4 border-solid border-4 rounded-xl mt-20 hover:bg-green transition-all'>
                    <strong className='text-clamp-label font-bold text-header'> 
                        Crie sua conta!
                    </strong>
                </button>
            </div>
        </div>
    )
}