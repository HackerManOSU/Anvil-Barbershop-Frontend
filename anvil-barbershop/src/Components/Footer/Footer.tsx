import React from 'react';

const Footer: React.FC = () => {
    return (

        <div className='bg-black h-[15vh] border-double border-t-4 border-[red] text-white flex flex-col items-center justify-evenly'>
            <h1 className='text-3xl font-bold'>Anvil Barbershop, LLC</h1>
            <h2 className='text-lg'>345 new address st, Milwaukie, OR, 97222</h2>
            <p className="text-[lightgray]">&copy; Anvil Barbershop LLC All rights reserved</p>

        </div>

    );
};

export default Footer;