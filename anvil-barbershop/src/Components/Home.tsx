import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const HomePage: React.FC = () => {

    return (
        <div className='flex flex-col items-center justify-center text-white px-3 sm:px-5'>
            <section className='text-center flex flex-col items-center min-h-[70vh] w-full max-w-[1200px] bg-anvilBackground border-b-4 border-double border-white px-4'>
                <h1 className='text-anvilRed text-4xl sm:text-6xl lg:text-7xl pt-12 pb-6 w-[95%]'>Anvil Barbershop</h1>

                <p className='text-anvilRed font-barber text-4xl sm:text-5xl pb-6'>Tradition Lives</p>

                <p className='font-barber text-2xl sm:text-3xl pb-2'>Cash Only</p>
                <p className='font-barber text-2xl sm:text-3xl pb-8'>Walk-Ins Only</p>

                <Link
                    to="/services"
                    className='times-new-roman bg-anvilRed mb-10 px-5 py-3 rounded-md text-xl sm:text-2xl hover:bg-[#ff817e] duration-500 text-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-anvilLightRed'
                >
                    Services and Pricing
                </Link>

                <img
                    src="/images/razor.jpg"
                    alt='Traditional straight razor on a barber station'
                    className='border-4 border-white mb-12 max-w-[95%] w-full sm:w-[680px] object-cover'
                />
            </section>

            <section className='flex flex-col items-center w-full max-w-[1200px] py-12'>
                <h2 className='text-anvilRed text-3xl sm:text-5xl mb-8 text-center'>More Shop Info</h2>

                <nav aria-label='Quick links' className='mb-10'>
                    <ul className='flex flex-col sm:flex-row gap-4 sm:gap-6 items-center'>
                        <li>
                            <Link
                                to="/hours"
                                className='text-white times-new-roman bg-anvilRed px-5 py-3 rounded-md text-xl sm:text-2xl hover:bg-[#ff817e] duration-500 inline-block min-w-[200px] text-center focus-visible:outline focus-visible:outline-4 focus-visible:outline-anvilLightRed'
                            >
                                Hours
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/faq"
                                className='text-white times-new-roman bg-anvilRed px-5 py-3 rounded-md text-xl sm:text-2xl hover:bg-[#ff817e] duration-500 inline-block min-w-[200px] text-center focus-visible:outline focus-visible:outline-4 focus-visible:outline-anvilLightRed'
                            >
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </nav>

                <h2 className='text-anvilRed text-3xl sm:text-5xl mb-8'>The Vibe</h2>

                <section className='grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center w-full' aria-label='Gallery of the shop atmosphere'>
                    <img src="/images/light.png" alt='Vintage barbershop light fixture' className='border-4 border-white mb-2 max-w-[95%] w-full sm:max-w-[430px] h-[420px] sm:h-[550px] object-cover' />

                    <img src="/images/geetar.png" alt='Guitar in the barbershop interior' className='border-4 border-white mb-2 max-w-[95%] w-full sm:max-w-[430px] h-[420px] sm:h-[550px] object-cover object-center' />

                    <img src="/images/beer.JPG" alt='Cold beverage in a relaxed barbershop setting' className='border-4 border-white mb-2 max-w-[95%] w-full sm:max-w-[430px] h-[420px] sm:h-[550px] object-cover object-center' />

                    <img src="/images/motorcycle.JPG" alt='Motorcycle detail reflecting the classic shop culture' className='border-4 border-white mb-2 max-w-[95%] w-full sm:max-w-[430px] h-[420px] sm:h-[550px] object-cover object-center' />
                </section>
            </section>
        </div>

    );
};

export default HomePage;