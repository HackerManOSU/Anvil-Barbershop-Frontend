import React from 'react';

const HoursPage: React.FC = () => {
    const schedule = [
        { day: 'Sunday', hours: 'Closed' },
        { day: 'Monday', hours: '10:00 - 4:00' },
        { day: 'Tuesday', hours: '10:00 - 4:00' },
        { day: 'Wednesday', hours: '10:00 - 4:00' },
        { day: 'Thursday', hours: '10:00 - 4:00' },
        { day: 'Friday', hours: '10:00 - 4:00' },
        { day: 'Saturday', hours: 'Closed' },
    ];

    return (
        <section className='text-white text-center bg-anvilBackground flex flex-col items-center min-h-[100vh] px-3 sm:px-5 pb-16'>
            <h1 className='text-5xl sm:text-7xl text-anvilRed mt-12'>Hours</h1>

            <p className='font-barber mt-4 mb-10 text-3xl sm:text-4xl'>Walk-Ins Only</p>

            <div className='w-full max-w-[900px] overflow-x-auto'>
                <table className='w-full border-collapse text-left'>
                    <caption className='sr-only'>Weekly opening hours for Anvil Barbershop</caption>
                    <thead>
                        <tr className='border-b-4 border-double border-white'>
                            <th scope='col' className='times-new-roman text-3xl sm:text-4xl py-4 px-4'>Day</th>
                            <th scope='col' className='times-new-roman text-3xl sm:text-4xl py-4 px-4 text-right'>Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map((entry) => (
                            <tr key={entry.day} className='border-b border-white/40'>
                                <th scope='row' className='font-normal text-lg sm:text-2xl py-4 px-4'>{entry.day}</th>
                                <td className='text-lg sm:text-2xl py-4 px-4 text-right whitespace-nowrap'>{entry.hours}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className='text-4xl sm:text-6xl my-12 font-barber'>Cash Only</p>
        </section>

    );
};

export default HoursPage;