import React from 'react';

import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";


const Footer: React.FC = () => {
    return (

        <footer className='flex flex-col items-center justify-evenly text-center bg-anvilBackground w-full border-double border-t-4 border-anvilRed min-h-[25vh] text-white pt-8 pb-6 px-4'>

            <div className='flex flex-row justify-center items-center gap-12 w-full text-6xl sm:text-7xl' aria-label='Social media links'>

                <a href="https://www.instagram.com/anvilbarbershop" target="_blank" rel="noopener noreferrer" aria-label='Visit Anvil Barbershop on Instagram' className="text-white hover:text-anvilRed duration-500 hover:scale-[1.15] focus-visible:outline focus-visible:outline-4 focus-visible:outline-anvilLightRed rounded-sm">
                    <FaInstagram />
                </a>

                <a href="https://www.facebook.com/AnvilBarberShop/" target='_blank' rel="noopener noreferrer" aria-label='Visit Anvil Barbershop on Facebook' className="text-white hover:text-anvilRed duration-500 hover:scale-[1.15] focus-visible:outline focus-visible:outline-4 focus-visible:outline-anvilLightRed rounded-sm">
                    <FaSquareFacebook />
                </a>
            </div>
            
            <h2 className='text-3xl sm:text-5xl font-bold pt-8 pb-8'>Anvil Barbershop, LLC</h2>
            
            <address className='not-italic text-base sm:text-lg pb-8'>345 new address st, Milwaukie, OR, 97222</address>
            
            <p className="text-[lightgray]">&copy; Anvil Barbershop LLC. All rights reserved</p>

        </footer>

    );
};

export default Footer;