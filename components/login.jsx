'use client';
import '../app/globals.css'
// import { BiLogIn } from 'react-icons/bi';

export default function Login(){

	return(
		<>
			<div className='flex bg-green p-2 mb-2 lg:mb-0 hover:bg-transparent transition-all'>
                <div className='w-full flex items-center justify-between'>
                    <span className='text-clamp-label text-header font-bold mr-4 whitespace-nowrap'>
                        Login
                    </span>

                    <div>
                        {/* <BiLogIn size={32} color='#fafafa'/> */}
                    </div>
                </div>
            </div>
	    </>
	)
}