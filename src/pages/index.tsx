import Head from 'next/head';
import { motion } from 'framer-motion';

import Hero from '@/components/landing/hero';
import Navbar from '@/components/landing/navbar';
import Partners from '@/components/landing/partners';
import Services from '@/components/landing/services';
import Features from '@/components/landing/features';
import Stats from '@/components/landing/stats';
import Footer from '@/components/landing/footer';

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-gray-900">
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Your description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col w-full'>
        <Navbar />
        <Hero />
        <Partners />
        <Features />
        <Services />
        <Stats />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
