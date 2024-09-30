import React from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
    return (

        <header className='header h-[8vh] bg-black flex justify-center items-center border-b-4 border-[red] border-double bg-white'>
            <nav className='bg-[black] w-full h-full text-white flex items-center justify-center'>

                <div className='w-[90%] max-w-[1100px] flex justify-between items-center'>

                <div className='logo bg-[green]'> <h1>X</h1></div>

                <ul className="flex flex-row w-[50%] justify-evenly text-xl">
                    <li>
                    <Link
                        to="/"
                        className=""
                    >
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link
                        to="/hours"
                        className=""
                    >
                        Hours
                    </Link>
                    </li>
                    <li>
                    <Link
                        to="/prices"
                        className=""
                    >
                        Prices
                    </Link>
                    </li>
                    <li>
                    <Link
                        to="/faq"
                        className=""
                    >
                        FAQ
                    </Link>
                    </li>
                </ul>

                </div>



            </nav>
        </header>

    );
};

export default Header;