'use client';
import Image from 'next/image';
import helixImage from '@/assets/cube-helix 1.png';
import helixImage1 from '@/assets/cube-helix.png';
import { motion } from 'framer-motion';

const FuncCardsContent = [
  {
    img: helixImage,
    title: 'Integration ecosystem',
    description:
      'Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.',
  },
  {
    img: helixImage1,
    title: 'Goal setting and tracking',
    description:
      'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.',
  },
];

export const Functionalities = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Everything you need</div>
          </div>
          <h2 className="section-title mt-5">
            Streamlined for easy management
          </h2>
          <p className="section-description mt-5">
            Enjoy customizable lists, teamwork tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        {/* cards */}
        <div className="flex flex-wrap md:gap-6 gap-4 justify-center mt-10">
          {FuncCardsContent.map((card, index) => (
            <div
              key={index}
              className="bg-white py-10 md:px-14 px-8 rounded-xl shadow-xl text-center border"
            >
              <div className="flex justify-center">
                <motion.img
                  src={card.img.src}
                  alt={card.title}
                  width={229}
                  height={229}
                  className="mb-4"
                  animate={{
                    translateY: [-17, 17],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'mirror',
                    duration: 3,
                    ease: 'easeInOut',
                  }}
                />
              </div>
              <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
              <p className="text-gray-600 text-base max-w-[16rem]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        {/* cards */}
      </div>
    </section>
  );
};
