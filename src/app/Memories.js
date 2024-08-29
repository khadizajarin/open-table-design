import React from 'react';
import Heading from './CommonComps/Heading';
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import memory1 from '@/assets/1-01.png';
import memory2 from '@/assets/2-01.png';
import memory3 from '@/assets/3-01.png';
import memory4 from '@/assets/4-01.png';
import memory5 from '@/assets/5-01.png';
import memory6 from '@/assets/6-01.png';
import memory7 from '@/assets/7-01.png';
import memory8 from '@/assets/8-01.png';
import memory9 from '@/assets/9-01.png';
import memory10 from '@/assets/10-01.png';
import memory11 from '@/assets/11-01.png';
import memory12 from '@/assets/12-01.png';
import memory13 from '@/assets/13-01.png';
import memory14 from '@/assets/14-01.png';
import memory15 from '@/assets/15-01.png';

import { Ubuntu } from 'next/font/google';


const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '500','700'], // Specify the weights you need
  });


const Memories = () => {
    return (
        <div className='bg-[#0B1519] h-full flex justify-center items-center flex-col pt-[2rem]'>
            <Heading text={'FOR THE BEST MEMORIES'} ></Heading>

            <div className="lg:pb-[3rem] pb-[1rem] lg:mt-[5.5rem] mt-[2rem] bg-[#0B1519] lg:w-[80rem] w-[20rem]">
                <Marquee pauseOnHover={true} speed={50} className=''>
                    <div className="pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory1} alt={memory1}  />
                    </div>
                    <div className="pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory2} alt={memory2}  />
                    </div>
                    <div className="pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory3} alt={memory3}  />
                    </div>
                    <div className="pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory4} alt={memory4}  />
                    </div>
                    <div className="pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory5} alt={memory5}  />
                    </div>
                    <div className="pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory11} alt={memory11}  />
                    </div>
                    <div className="pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory13} alt={memory11}  />
                    </div>
                    <div className="pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory14} alt={memory11}  />
                    </div>
                </Marquee>

                <Marquee direction="right" pauseOnHover={true} speed={50}>
                    <div className=" pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory6} alt={memory6}  />
                    </div>
                    <div className=" pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory7} alt={memory7}  />
                    </div>
                    <div className=" pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory8} alt={memory8}  />
                    </div>
                    <div className=" pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory9} alt={memory9}  />
                    </div>
                    <div className=" pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory10} alt={memory10}  />
                    </div>
                    <div className="pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory12} alt={memory12}  />
                    </div>
                    <div className="pb-[1rem] px-[0.5rem] w-[9rem] lg:w-[24rem]">
                        <Image src={memory15} alt={memory15}  />
                    </div>
                </Marquee>
            </div>

            <div className='text-[#BCA263] text-center pb-[4rem] tracking-normal leading-loose lg:text-[2rem]'>
                <p style={{ fontFamily: ubuntu.style.fontFamily,fontWeight: '500' }}>OPEN TABLE IS FOR EVERYONE WHO COLLECTS
                <span className="hidden lg:inline"><br /></span>  BEAUTIFUL MOMENTS.</p>
            </div>
        </div>

    );
};

export default Memories;