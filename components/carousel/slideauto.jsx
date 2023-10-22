'use client';
import React, { useState } from 'react';
import Image from 'next/image';


export default function SlideAuto({ img, text, alt }) {
    const [isHovered, setIsHovered] = useState(false);
    
	return (
		<div className="relative h-full w-full "
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Image src={img} alt={alt} className="h-[40vh] w-full md:h-[50vh]" />
			<div className={`bg-gradient absolute mx-auto w-1/2 ${isHovered ? 'visible' : 'hidden'}`}>
				<button className="w-full py-4">
					<span className="text-header">Saiba mais</span>
				</button>
				<p className="text-center text-clamp-text text-header">{text}</p>
			</div>
		</div>
	);
}
