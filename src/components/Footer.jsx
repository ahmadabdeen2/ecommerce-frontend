import React from 'react'
import {logodark, logolight} from '../assets'
import {Link} from 'react-router-dom'
import {useGlobalContext} from '../contexts/globalContext.js'
const Footer = () => {
  const {darkTheme, setDarkTheme} = useGlobalContext()
  return (
<footer className="p-4 bg-gray-200  md:px-6 md:py-8 dark:bg-gray-900 border-t border-gray-900 dark:border-gray-200">
    <div className="sm:flex sm:items-center sm:justify-between">
        <Link to={'/'} className="flex items-center mb-4 sm:mb-0">
            <img src={darkTheme ? logolight : logodark} className="mr-3 h-8" alt="Ahmad Abdeen Logo" />
      
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-900 sm:mb-0 dark:text-gray-200">
            <li>
                <Link to={'/'} className="mr-4 hover:underline md:mr-6 ">Home</Link>
            </li>
            <li>
                <Link to={'/about'} className="mr-4 hover:underline md:mr-6">About</Link>
            </li>

            <li>
                <Link to={'/cart'} className="hover:underline">Cart</Link>
            </li>
        </ul>
    </div>

</footer>
  )
}

export default Footer