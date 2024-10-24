import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const HomePage: React.FC = () => {

    return (
        <div className='flex flex-col items-center justify-center'>

            <div className='text-white text-center flex flex-col items-center min-h-[100vh] w-[95%] bg-anvilBackground border-b-4 border-double border-white'>

                <h1 className='text-anvilRed text-5xl sm:text-7xl pt-12 pb-8 w-[95%]'>Anvil Barbershop</h1>

                <h2 className='text-anvilRed font-barber text-5xl pb-8'>Tradition Lives</h2>

                <h2 className='font-barber text-3xl pb-8'>CASH ONLY</h2>

                <h2 className='font-barber text-3xl pb-8'>WALK INS ONLY</h2>

                <Link to="/services">
                    <button className='times-new-roman bg-anvilRed mb-8 px-4 py-4 rounded-md text-2xl hover:bg-[#ff817e] duration-500'>Services and Pricing</button>
                </Link>

                <img src="/images/razor.jpg" alt="" className='border-4 border-white mb-12 max-w-[90%]'/>
            
            </div>

            <div className='flex flex-col items-center w-[95%]'>

                <h1 className='text-anvilRed text-4xl sm:text-5xl my-12 text-center'>Click below for more info</h1>

                <Link to="/hours">
                    <button className='text-white times-new-roman bg-anvilRed mb-8 px-4 py-4 rounded-md text-2xl hover:bg-[#ff817e] duration-500 w-[200px]'>Hours</button>
                </Link>

                <Link to="/faq">
                    <button className='text-white times-new-roman bg-anvilRed mb-8 px-4 py-4 rounded-md text-2xl hover:bg-[#ff817e] duration-500 w-[200px]'>FAQ Page</button>
                </Link>

                <h1 className='text-anvilRed text-4xl sm:text-5xl my-12'>The Vibe </h1>

                <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center'>

                    <img src="/images/light.png" alt="" className='border-4 border-white mb-12 max-w-[90%] w-[400px] h-[550px]'/>
                    
                    <img src="/images/geetar.png" alt="" className='border-4 border-white mb-12 max-w-[90%] w-[400px] h-[550px] object-cover object-center'/>

                    <img src="/images/beer.JPG" alt="" className='border-4 border-white mb-12 max-w-[90%] w-[400px] h-[550px] object-cover object-center'/>

                    <img src="/images/motorcycle.JPG" alt="" className='border-4 border-white mb-12 max-w-[90%] w-[400px] h-[550px] object-cover object-center'/>

                </div>

            </div>

        </div>

    );
};

export default HomePage;