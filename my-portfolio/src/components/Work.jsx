import React from 'react'
import BlackJack from '../assets/BlackJack.png'
import GlobalDining from '../assets/GlobalDining.png'

const Work = () => {
  return (
    <div name= 'work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
              <p className='py-6'>This is some of my most recent projects</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div name= 'card' className='shadow-lg shadow-[#040c16] group container roudned-md flex justify-center items-center mx-auto content-div'>
              <div>
                <div>
                  <span>

                  </span>
                  <div>
                    <a href=''>
                      <button>

                      </button>
                    </a>
                    <a href=''>
                      <button>

                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Work