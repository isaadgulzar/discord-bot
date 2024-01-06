import { useEffect } from 'react';
import Image from 'next/image';

import AOS from 'aos';

const Features = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className='relative isolate bg-gray-900 mt-0 lg:mt-40'>
      <div
        className="absolute right-20 top-40 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        <div 
          className="aspect-[808/632] w-[39.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'}}  
        >  
        </div>
      </div>
       <div className="mx-auto overflow-x-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 py-20 sm:px-10 sm:py-24 lg:py-24 xl:px-24">
            <Image
              data-aos="fade-right"
              src="/images/feature.png"
              alt="Product screenshot"
              className="order-2 lg:order-1 relative -z-20 -left-[17.8rem] lg:-left-[34rem] min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
              width={2432}
              height={1442}
            />
            <div
              className="order-1 lg:order-2 text-3xl font-bold tracking-tight text-white sm:text-4xl mt-12"
            >
              <div className="lg:row-start-2 lg:max-w-md">
                  <h2 data-aos="fade-down" className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    Boost your productivity.
                    <br />
                    Start using our app today.
                  </h2>
                  <p data-aos="fade-down" className="mt-6 text-lg font-normal leading-8 text-gray-300">
                    Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada
                    adipiscing sagittis vel nulla. Ac euismod vel sit maecenas.
                  </p>
                </div>
                <hr data-aos="fade-down" className='border-t border-white/10 h-px max-w-sm mt-10' />
                <div data-aos="fade-down" className="max-w-xl lg:row-start-3 mt-10 lg:max-w-md">
                  <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                    <div  className="relative">
                      <dt className="ml-9 inline-block font-semibold text-white">
                        <Image 
                          src='/icons/cloud.svg'
                          alt='cloud icon'
                          className="absolute left-1 top-1 h-5 w-5 text-primary"
                          width={20}
                          height={20}
                        />
                        Push to deploy.
                      </dt>
                      <dd className="inline font-normal pl-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id
                        magna.
                      </dd>
                    </div>
                    <div className="relative">
                      <dt className="ml-9 inline-block font-semibold text-white">
                        <Image 
                          src='/icons/lock.svg'
                          alt='lock icon'
                          className="absolute left-1 top-1 h-5 w-5 text-primary"
                          width={20}
                          height={20}
                        />
                        SSL certificates.
                      </dt>
                      <dd className="inline font-normal pl-1">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                        cupidatat commodo.
                      </dd>
                    </div>
                    <div className="relative">
                      <dt className="ml-9 inline-block font-semibold text-white">
                        <Image 
                          src='/icons/database.svg'
                          alt='database icon'
                          className="absolute left-1 top-1 h-5 w-5 text-primary"
                          width={20}
                          height={20}
                        />
                        Database backups.
                      </dt>
                      <dd className="inline font-normal pl-1">
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                      </dd>
                    </div>
                  </dl>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Features;