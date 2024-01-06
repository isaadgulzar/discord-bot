import { useEffect, useState } from 'react';
import AOS from 'aos';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

   useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div ref={ref} className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
  <svg
    className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
  >
    <defs>
      <pattern
        id="1d4240dd-898f-445f-932d-e2872fd12de3"
        width={200}
        height={200}
        x="50%"
        y={0}
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <svg x="50%" y={0} className="overflow-visible fill-gray-800/20">
      <path
        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
        strokeWidth={0}
      />
    </svg>
    <rect
      width="100%"
      height="100%"
      strokeWidth={0}
      fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
    />
  </svg>
  <div
    className="absolute inset-x-0 top-24 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
    data-aos="fade-up"
    data-aos-delay="1000"
  >
    <div 
      className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
      style={{clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'}}  
    >
    </div>
  </div>
  {/* Stats */}
  <div className="mx-auto max-w-7xl px-0 lg:px-8">
    <div className="mx-auto lg:mx-0 lg:max-w-xl">
      <h2 data-aos="fade-up" className="text-base font-semibold leading-8 text-primary">
        Our track record
      </h2>
      <p data-aos="fade-up" className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Trusted by thousands of developers worldwide
      </p>
      <p data-aos="fade-up" className="mt-6 text-lg font-normal leading-8 text-gray-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
        ratione.
      </p>
    </div>
    <dl data-aos="fade-up" className="mx-auto mt-16 bg-gray-700/30 rounded-3xl py-10 px-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
      <div className="flex flex-col gap-y-3 pl-6">
        <dt className="text-sm leading-6">Developers on the platform</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
          {startCounting && <CountUp redraw={true} start={0} end={8000} duration={5} separator="," suffix='+' />}
        </dd>
      </div>
      <div className="flex flex-col gap-y-3 pl-6">
        <dt className="text-sm leading-6">Daily requests</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
          {startCounting && <CountUp redraw={true} start={0} end={90} duration={5} suffix='m+' />}
        </dd>
      </div>
      <div className="flex flex-col gap-y-3 pl-6">
        <dt className="text-sm leading-6">Uptime guarantee</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
          {startCounting && <CountUp redraw={true} start={0} end={99.9} decimals={1} duration={5} suffix='%' useEasing={true} />}
        </dd>
      </div>
      <div className="flex flex-col gap-y-3 pl-6">
        <dt className="text-sm leading-6">Projects deployed</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
          {startCounting && <CountUp redraw={true} start={0} end={12} duration={5} suffix='m' />}
        </dd>
      </div>
    </dl>
  </div>
</div>

  );
};

export default Stats;