import NavLink from './NavLink';

const Navbar = () => {
    return (
      <div className="fixed text-xl top-0 w-full bg-white border-b z-50">
          <nav className="flex items-center w-100 justify-between mx-20">
              <a href="/">
                  <img src="/logo.svg" alt="Logo" className="mr-4 max-h-6" />
              </a>
              <ul className="flex py-6 md:space-x-8">
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
          </nav>
      </div>
    )
  }

export default Navbar