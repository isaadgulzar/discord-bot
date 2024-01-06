import { useEffect } from 'react';
import AOS from 'aos';
import Image from 'next/image';

const Partners = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS when components change
  }, []);

  return (
    <div
      className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8"
    >
      <h2 className="text-center text-lg font-semibold leading-8 text-white">
        The world’s most innovative companies use our app
      </h2>
      <div
        className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
      >
        <Image 
          data-aos="fade-right"
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="/icons/logo1.svg"
          alt="Transistor"
          width={158}
          height={48}
        />
        <Image 
          data-aos="fade-right"
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="/icons/logo2.svg"
          alt="Reform"
          width={158}
          height={48}
        />
        <Image 
          data-aos="fade-right"
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="/icons/logo3.svg"
          alt="Tuple"
          width={158}
          height={48}
        />
        <Image 
          data-aos="fade-right"
          className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          src="/icons/logo4.svg"
          alt="SavvyCal"
          width={158}
          height={48}
        />
        <Image 
          data-aos="fade-right"
          className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          src="/icons/logo5.svg"
          alt="Statamic"
          width={158}
          height={48}
        />
      </div>
    </div>
  );
};

export default Partners;
