'use client';
import Image from 'next/image';
import productImage from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeiImage from '@/assets/tube.png';
import icon1 from '@/assets/Vector.svg';
import icon2 from '@/assets/Vector (1).svg';
import icon3 from '@/assets/Vector (2).svg';
import icon4 from '@/assets/Vector (3).svg';
import ArrowIcon from '@/assets/arrow-right.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Features = [
  {
    icon: icon1,
    title: 'Integration ecosystem',
    description: 'Track your progress and motivate your efforts everyday.',
  },
  {
    icon: icon2,
    title: 'Secure data encryption',
    description: 'Ensure your data’s safety with top-tier encryption.',
  },
  {
    icon: icon3,
    title: 'Goal setting and tracking',
    description: 'Set and track goals with manageable task breakdowns.',
  },
  {
    icon: icon4,
    title: 'Customizable notifications',
    description: 'Get alerts on tasks and deadlinest hat matter most.',
  },
];

export const ProductShowcase = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeiImage.src}
            alt="tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-12 max-md:gap-10">
          {Features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 text-lg items-start"
            >
              <feature.icon />
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-base">{feature.description}</p>
              <button className="bg-transparent text-base gap-2 text-black py-1 rounded-lg font-medium inline-flex items-center justify-center tracking-tight group transition-all duration-300 ease-in-out">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
