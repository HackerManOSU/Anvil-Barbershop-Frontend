import React from 'react';
 

const ServicesPage: React.FC = () => {
    const services = [
        { name: 'Haircut', price: '$30' },
        { name: 'Haircut (with fade)', price: '$35' },
        { name: 'Seniors (65+)', price: '$25' },
        { name: 'Beard Trim', price: '$20 - $25' },
        { name: 'Straight Razor Shave', price: '$30' },
        { name: 'Haircut + Shave', price: '$55' },
        { name: 'Haircut + Beard Trim', price: '$50' },
        { name: 'Add straight razor to any service', price: '$10' },
    ];

    return (
        <section className='text-white bg-anvilBackground flex flex-col items-center min-h-[100vh] px-3 sm:px-5 pb-16'>
            <h1 className='text-5xl sm:text-7xl text-anvilRed mt-12 text-center'>Services</h1>

            <p className='font-barber mt-4 mb-10 text-3xl sm:text-4xl text-center'>Cash Only</p>

            <div className='w-full max-w-[1000px] overflow-x-auto'>
                <table className='w-full border-collapse text-left'>
                    <caption className='sr-only'>Anvil Barbershop services and pricing</caption>
                    <thead>
                        <tr className='border-b-4 border-double border-white'>
                            <th scope='col' className='times-new-roman text-3xl sm:text-4xl py-4 px-4'>Service</th>
                            <th scope='col' className='times-new-roman text-3xl sm:text-4xl py-4 px-4 text-right'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service.name} className='border-b border-white/40'>
                                <th scope='row' className='font-normal text-lg sm:text-2xl py-4 px-4'>{service.name}</th>
                                <td className='text-lg sm:text-2xl py-4 px-4 text-right whitespace-nowrap'>{service.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

    );
};

export default ServicesPage;