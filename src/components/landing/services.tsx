import { useEffect, useRef } from 'react';
import AOS from 'aos';
import Image from 'next/image';

const Services = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS when components change
  }, []);

  return (
    <div className='relative isolate bg-gray-900'>
       <div className="mx-auto overflow-hidden">
          <div className="px-6 py-5 sm:px-10 lg:py-24 xl:px-24">
            <div
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-12"
            >
              <div className="">
                <div className="mx-auto max-w-7xl px-0 lg:px-8">
                  <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 data-aos="fade-up" className="text-base font-semibold leading-7 text-primary">
                      Everything you need
                    </h2>
                    <p data-aos="fade-up" className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      No server? No problem.
                    </p>
                    <p data-aos="fade-up" className="mt-6 text-lg font-normal leading-8 text-gray-300">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                      impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.
                    </p>
                  </div>
                </div>
                <div data-aos="fade-up" className="max-w-6xl mx-auto relative rounded-xl overflow-hidden pt-16">
                  <div className="relative rounded-xl inline-block w-full h-full overflow-hidden">
                    <Image 
                      src="/images/hero.png"
                      alt="Your Image"
                      className="block w-full h-full relative z-20 p-px rounded-xl shadow-2xl"
                      width={2432}
                      height={1442}
                    />
                    <div
                    data-aos="fade-down"
                      className="absolute w-full h-full top-0 left-0 right-0 bottom-0 z-10 pointer-events-none mask-border animate-moveBorder"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Services;