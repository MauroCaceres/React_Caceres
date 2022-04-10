import Logo from './Logo.js';
import { Link } from "react-router-dom"
import CartWidget from './CartWidget.js';

const NavBar = () => {
    return (
    <>
        <nav className="bg-slate-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <ul className="flex flex-row mt-4 mx-2 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                <Link to='/'>
                   <Logo/>
                </Link>
                </li>
                <li>
                <Link to='/categoria/Juegos' className="block py-2 pr-4 pl-3 text-gray-700 border-b hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Juegos</Link>
                </li>
                <li>
                <Link to='/categoria/DLC' className="block py-2 pr-4 pl-3 text-gray-700 border-b hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">DLC</Link>
                </li>
                <Link to='cart'>
                    <CartWidget/>
                </Link>
            </ul>
        </div>
        </nav>
    </>
    )
}
export default NavBar;