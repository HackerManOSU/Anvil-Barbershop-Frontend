import React from 'react';

import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";


const Footer: React.FC = () => {
    return (

        <div className='flex flex-col items-center justify-evenly text-center bg-anvilBackground w-[100vw] border-double border-t-4 border-[red] min-h-[25vh] text-white pt-8 pb-4'>

            <div className='flex flex-row justify-evenly items-center w-[100%] text-7xl'>

                <a href="https://www.instagram.com/anvilbarbershop" target="_blank" rel="noopener noreferrer" className="text-white hover:text-anvilRed duration-500 hover:scale-[1.25]">
                    <FaInstagram />
                </a>

                <a href="https://www.facebook.com/AnvilBarberShop/" target='_blank' rel="noopener noreferrer" className="text-white hover:text-anvilRed duration-500 hover:scale-[1.25]">
                    <FaSquareFacebook />
                </a>



            </div>
            
            <h1 className='text-6xl font-bold pt-8 pb-12'>Anvil Barbershop, LLC</h1>
            
            <h2 className='text-lg pb-8'>345 new address st, Milwaukie, OR, 97222</h2>
            
            <p className="text-[lightgray]">&copy; Anvil Barbershop LLC. All rights reserved</p>


        </div>



        

    );
};

export default Footer;