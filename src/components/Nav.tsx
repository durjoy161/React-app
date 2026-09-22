import { CiMenuBurger } from 'react-icons/ci';
import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-white shadow-sm">
            <div className="container mx-auto px-4 flex justify-between items-center">

                <button className="text-3xl text-gray-600 md:hidden">
                    <CiMenuBurger />
                </button>

                <div>
                    <img src={Logo} alt="Logo" className="w-32 md:w-auto" />
                </div>

                <ul className="hidden md:flex justify-center items-center gap-6 lg:gap-8 text-gray-600">
                    <li className="text-pink-600">
                        <a href="#">Home</a>
                    </li>

                    <li className="hover:text-pink-600 transition">
                        <a href="#">Technologies</a>
                    </li>

                    <li className="hover:text-pink-600 transition">
                        <a href="#">Projects</a>
                    </li>

                    <li className="hover:text-pink-600 transition">
                        <a href="#">About</a>
                    </li>

                    <li className="hover:text-pink-600 transition">
                        <a href="#">Contact</a>
                    </li>
                </ul>

                <div className="hidden md:flex items-center gap-3">
                    <button className="text-gray-600 text-sm cursor-pointer">
                        Sign In
                    </button>

                    <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-full px-4 py-2 cursor-pointer transition">
                        Sign Up
                    </button>
                </div>

                <button className="md:hidden bg-pink-600 text-white text-sm font-medium rounded-full px-4 py-2">
                    Sign Up
                </button>

            </div>
        </nav>
    );
};

export default Nav;