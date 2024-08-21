import React from 'react';
import Heading from './CommonComps/Heading';
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import card1 from '@/assets/C1-01.png';
import card2 from '@/assets/C2-01.png';
import card3 from '@/assets/C3-01.png';
import card4 from '@/assets/C4-01.png';

const Memories = () => {
    return (
        <div className='bg-[#0B1519] h-full flex justify-center items-center flex-col pt-[2rem]'>
            <Heading text={'FOR THE BEST MEMORIES'} ></Heading>

            <div className="pb-[4rem] mt-[5rem] bg-[#0B1519] w-[80rem]">
                <Marquee pauseOnHover={true} speed={50} className=''>
                    <div className="pb-[1rem] px-[0.5rem]  w-[24rem]">
                        <Image src={card1} alt={card1}  />
                    </div>
                    <div className="pb-[1rem] px-[0.5rem]  w-[24rem]">
                        <Image src={card2} alt={card2}  />
                    </div>
                    <div className="pb-[1rem] px-[0.5rem]  w-[24rem]">
                        <Image src={card3} alt={card3}  />
                    </div>
                    <div className="pb-[1rem] px-[0.5rem]  w-[24rem]">
                        <Image src={card4} alt={card4}  />
                    </div>
                    <div className="pb-[1rem] px-[0.5rem]  w-[24rem]">
                        <Image src={card3} alt={card3}  />
                    </div>
                </Marquee>

                <Marquee direction="right" pauseOnHover={true} speed={50}>
                    <div className=" pb-[1rem] px-[0.5rem] w-[22rem]">
                        <Image src={card1} alt={card1}  />
                    </div>
                    <div className=" pb-[1rem] px-[0.5rem] w-[22rem]">
                        <Image src={card2} alt={card2}  />
                    </div>
                    <div className=" pb-[1rem] px-[0.5rem] w-[22rem]">
                        <Image src={card3} alt={card3}  />
                    </div>
                    <div className=" pb-[1rem] px-[0.5rem] w-[22rem]">
                        <Image src={card4} alt={card4}  />
                    </div>
                    <div className=" pb-[1rem] px-[0.5rem] w-[22rem]">
                        <Image src={card3} alt={card3}  />
                    </div>
                </Marquee>
            </div>
        </div>

    );
};

export default Memories;