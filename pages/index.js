import Head from 'next/head';
import HeaderSection from '../components/HeaderSection';
import CreaSection from '../components/CreaSection';
import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <main className="pb-32 md:pb-40">
      <Head>
        {/* Add any head elements here, e.g., <title>Your Page Title</title> */}
      </Head>
      <Navbar />
      <HeaderSection />
      <CreaSection />
      <FooterSection />
      {showScroll && (
        <div className="fixed bottom-20 md:bottom-4 right-4 bg-gray-800 rounded-full p-2 cursor-pointer z-50" onClick={scrollTop}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </div>
      )}
    </main>
  );
}