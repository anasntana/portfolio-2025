import NavLink from './NavLink';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
      <div className="fixed text-xl top-0 w-full bg-white border-b z-50">
          <nav className="flex items-center justify-between px-4 md:px-20 py-4">
              <a href="/" className="flex-shrink-0">
                  <img src="/logo.svg" alt="Logo" className="max-h-6" />
              </a>
              
              {/* Desktop Menu */}
              <ul className="hidden md:flex space-x-8">
                  <li className='bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900
                      bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px]
                      transition-all duration-500 ease-out'>
                      <NavLink href="/" title="Home" />
                  </li>
                  <li className='bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900
                      bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px]
                      transition-all duration-500 ease-out'>
                      <NavLink href="/projects" title="Projects" />
                  </li>
                  <li className='bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900
                      bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px]
                      transition-all duration-500 ease-out'>
                      <NavLink href="/resume" title="Resume" />
                  </li>
                  <li className='bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900
                      bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px]
                      transition-all duration-500 ease-out'>
                      <NavLink href="/about" title="About" />
                  </li>
              </ul>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-gray-900 hover:border-gray-500"
                onClick={toggleMenu}
              >
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <ul className="px-4 py-2 space-y-2">
                <li className='py-2 border-b border-gray-200'>
                  <NavLink href="/" title="Home" />
                </li>
                <li className='py-2 border-b border-gray-200'>
                  <NavLink href="/projects" title="Projects" />
                </li>
                <li className='py-2 border-b border-gray-200'>
                  <NavLink href="/resume" title="Resume" />
                </li>
                <li className='py-2'>
                  <NavLink href="/about" title="About" />
                </li>
              </ul>
            </div>
          )}
      </div>
    )
  }

export default Navbar