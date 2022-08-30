import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#D5BADB]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#563C5C]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#86608E]'>
          Aileen Bryand
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#563C5C]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#86608E] py-4 max-w-[700px]'>
        I am a 22 year old Full Stack Developer eager to continue learning and to continue to expand my knowledge in web development. I would like to present the projects that I worked on (along with several team memebrs) during my time in UT Austing Coding Bootcamp
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#301934] hover:border-[#301934]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;