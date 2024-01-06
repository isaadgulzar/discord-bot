import { useEffect } from 'react';
import AOS from 'aos';
import Image from 'next/image';


const Hero = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="relative isolate overflow-hidden">
  {/* svg  */}
  <div
    className="absolute top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
    aria-hidden="true"
  >
    <div 
      className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
      style={{clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'}}
    ></div>
  </div>
  <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
    <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-[590px] lg:pt-8">
      <div className="mt-24 sm:mt-32 lg:mt-16">
        <a href="#" className="inline-flex space-x-6">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
            Latest updates
          </span>
          <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
            <span>Just shipped v1.0</span>
            {/* svg  */}
          </span>
        </a>
      </div>
      <h1  data-aos="fade-up"
     data-aos-once="false" data-aos-duration="1000"  className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Deploy to the cloud with confidence
      </h1>
      <p  data-aos="fade-up"
     data-aos-once="false" data-aos-duration="1000"  className="mt-6 text-lg font-normal leading-8 text-gray-300">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <div  data-aos="fade-up"
     data-aos-once="false" data-aos-duration="1000"  className="mt-10 flex items-center gap-x-6">
        <a
          href="#"
          className="btn-primary"
        >
          <span>Get started</span>
        </a>
        <a href="#" className="btn-outline-primary">
          Live demo <span>→</span>
        </a>
      </div>
    </div>
    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
      <div data-aos="fade-left" className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
        <Image 
          src="/images/hero.png"
          alt="App screenshot"
          width={2432}
          height={1442}
          className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
          priority 
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default Hero;
