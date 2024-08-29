/* eslint-disable react/no-unescaped-entities */
import { Cinzel,Ubuntu } from 'next/font/google';
import Image from 'next/image';
import Heading from './CommonComps/Heading';
import shadowImage from '@/assets/Card Background-01.png';
import Service from './CommonComps/Service';
import card1 from '@/assets/C1-01.png';
import card2 from '@/assets/C2-01.png';
import card3 from '@/assets/C3-01.png';
import card4 from '@/assets/C4-01.png';

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '700','900'], 
  });

const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '500','700'], 
  });
  

const Services = () => {
    return (
        <div className='bg-[#0B1519] flex justify-center items-center flex-col relative pb-[1rem]'>
            <div className='absolute top-0 left-0 w-full h-full '>
                <Image 
                    src={shadowImage}
                    className=''
                    alt="Shadow"
                />
            </div>
            <div className='lg:pt-[5.75rem] pt-[2rem] lg:mb-[4.375rem] mb-[3rem]'>
                <Heading  text={'ABOUT OUR SERVICES'}></Heading>
            </div>
            <p className='lg:pb-[5rem] pb-[4rem] text-[#BCA263] lg:text-[1.5rem] text-[1rem] text-center lg:px-[11.25rem] px-[2rem] tracking-wider lg:leading-loose'
            style ={{fontFamily: ubuntu.style.fontFamily, fontWeight: '400'}}>
                Lorem Ipsum ips simply dummy text of the printing and typesetting industry. Lorem<span className="hidden lg:inline"><br /></span> 
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown<span className="hidden lg:inline"><br /></span> 
                printer took a galley of type and scrambled it to make a type specimen book. It has<span className="hidden lg:inline"><br /></span> 
                survived notonly five centuries, but also the leap into electronic typesetting,<span className="hidden lg:inline"><br /></span> 
                remaining essentially unchanged.
            </p>

            <div className='flex flex-col lg:gap-[8rem] gap-[4rem] lg:mb-[6.75rem]'>
            <Service image={card1} cardTitle={`THE DINING ROOM (restaurant)`}
            text={ <>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<span className="hidden lg:inline"><br /></span> 
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown<span className="hidden lg:inline"><br /></span> 
                printer took a galley of type and scrambled it to make a type specimen book.
            </>}></Service>

            <Service image={card2} cardTitle={`ALL RISE (bakery))`}
            text={ <>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<span className="hidden lg:inline"><br /></span> 
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown<span className="hidden lg:inline"><br /></span> 
            printer took a galley of type and scrambled it to make a type specimen book.
            </>}>
            </Service>

            <Service image={card3} cardTitle={`GATHER YOUR PEERS (live music & bar)`}
            text={ <>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<span className="hidden lg:inline"><br /></span> 
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown<span className="hidden lg:inline"><br /></span> 
            printer took a galley of type and scrambled it to make a type specimen book.
            </>}>
            </Service>

            <Service image={card4} cardTitle={`HOLD COURT (private Dinning)`}
            text={ <>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<span className="hidden lg:inline"><br /></span> 
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown<span className="hidden lg:inline"><br /></span> 
            printer took a galley of type and scrambled it to make a type specimen book.
            </>}>
            </Service>
            </div>

            
        </div>
    );
};

export default Services;