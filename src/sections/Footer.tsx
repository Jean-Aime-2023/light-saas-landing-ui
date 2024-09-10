import logo from '@/assets/logosaas.png';
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:top-0 before:bottom-0 before:content-[''] before:h-full before:w-full before:blur before:bg-white/20 before:absolute">
          <Image src={logo} height={40} alt="logo-saas" className='relative'/>
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className='mt-6'>&copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
// before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,C2F0B1,#2FD8FE)]