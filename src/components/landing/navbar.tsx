import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScroll(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full h-12 text-white flex items-center justify-between z-40 px-6 py-2 lg:px-20 ${scroll ? 'backdrop-blur-2xl ' : ''}`}
      initial={false}
      animate={{ backdropFilter: scroll ? 'blur(20px)' : 'blur(0px)'}}
      transition={{ duration: 0.3 }}
    >
      <Image 
        className="h-6 relative z-50"
        src="/icons/logo.svg"
        alt="Logo"
        width={28}
        height={28}
      />
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <ul className="text-white flex items-center gap-8">
            <li className="nav-link">
              <a href='#'>
                Features
              </a>
            </li>
            <li className="nav-link">
              <a href='#'>
                Method
              </a>
            </li>
            <li className="nav-link">
              <a href='#'>
                Costumers
              </a>
            </li>
            <li className="nav-link">
              <a href='#'>
                Changelog
              </a>
            </li>
            <li className="nav-link">
              <a href='#'>
                Pricing
              </a>
            </li>
            <li className="nav-link">
              <a href='#'>
                Company
              </a>
            </li>
            <li className="nav-link">
              <a href='#'>
                Contact
              </a>
            </li>
        </ul>
      </div>
      <button className="hidden lg:flex btn-primary py-1 hover:-translate-y-0">
        <Image 
          src='/icons/discord.svg'
          alt='discord'
          className='w-6 h-6'
          width={0}
          height={0}
        />
        <span>Login with Discard</span>
      </button>
      <div className="cursor-pointer lg:hidden transition-all" onClick={toggleMenu}>
        <svg
          className="h-6 w-6 md:h-8 md:w-8 text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <motion.path
            initial={false}
            animate={{ d: isOpen ? 'M3 12h18M3 6h18M3 18h18' : 'M2 12h20M2 6h20M2 18h20' }}
            transition={{ duration: 0.3 }}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="nav-menu"
            id="nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full bg-gray-900 top-0 left-0 overflow-hidden px-10"
          >
            <ul className="flex flex-col gap-4 divide-y divide-gray-400/10 mt-20 text-center">
              <li className='mobile-nav-link'>
                <a href='#'>
                Linear
                </a>
              </li>
              <li className='mobile-nav-link'>
                <a href='#'>
                Features
                </a>
              </li>
              <li className='mobile-nav-link'>
                <a href='#'>
                Method
                </a>
              </li>
              <li className='mobile-nav-link'>
                <a href='#'>
                Costumers
                </a>
              </li>
              <li className='mobile-nav-link'>
                <a href='#'>
                Changelog
                </a>
              </li>
              <li className='mobile-nav-link'>
                <a href='#'>
                Pricing
                </a>
              </li>
              <li className='mobile-nav-link'>
                <a href='#'>
                Company
                </a>
              </li>
              <li className='mobile-nav-link'>
                <a href='#'>
                Contact
                </a>
              </li>
            </ul>
            
            <div className='mt-10 flex items-center justify-center'>
              <button
                className="btn-primary"
              >
                  <Image 
                    src='/icons/discord.svg'
                    alt='discord'
                    className='w-6 h-6'
                    width={0}
                    height={0}
                  />
                  <span>Login with Discard</span>
              </button>
            </div>

            <div
              id="nav-close"
              onClick={toggleMenu}
              className="absolute top-2.5 right-5 text-3xl cursor-pointer"
            >
              <svg
                className="h-7 w-7 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 10.586L16.95 5.636 18.364 7.05 13.415 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.585 12 5.636 7.05l1.414-1.414L12 10.586z"
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>
  );
};

export default Navbar;
