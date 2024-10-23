import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {

    return (
        <div className='text-white text-center flex flex-col items-center min-h-[100vh] bg-anvilBackground'>

            <h1 className='text-anvilRed text-7xl pt-12 pb-8'>Anvil Barbershop</h1>

            <h2 className='text-anvilRed font-barber text-5xl pb-8'>Tradition Lives</h2>

            <h2 className='font-barber text-3xl pb-8'>CASH ONLY</h2>
            
            <h2 className='font-barber text-3xl pb-8'>WALK INS ONLY</h2>

            <Link to="/services">
                <button className='font-barber bg-anvilRed mb-8 px-4 py-4 rounded-md text-2xl hover:bg-[#ff817e] duration-500'>Services and Pricing</button>
            </Link>

            <img src="https://placehold.co/400x600" alt="" className='border-4 border-white mb-8'/>
        </div>
    );
};

export default HomePage;