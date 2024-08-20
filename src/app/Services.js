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
        <div className='bg-[#0B1519] h-full flex justify-center items-center flex-col relative'>
            <div className='absolute top-0 left-0 w-full h-full '>
                <Image 
                    src={shadowImage}
                    className=''
                    alt="Shadow"
                />
            </div>
            <div className='pt-[5.75rem] mb-[4.375rem]'>
                <Heading  text={'ABOUT OUR SERVICES'}></Heading>
            </div>
            <p className='pb-[5.75rem] text-[#BCA263] text-[1.3125rem] text-center px-[11.25rem] tracking-wider leading-loose'
            style ={{fontFamily: ubuntu.style.fontFamily, fontSize: '1.5rem', fontWeight: '400'}}>
                Lorem Ipsum ips simply dummy text of the printing and typesetting industry. Lorem <br/>
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown <br/>
                printer took a galley of type and scrambled it to make a type specimen book. It has <br/>
                survived notonly five centuries, but also the leap into electronic typesetting, <br/>
                remaining essentially unchanged.
            </p>

            <div className='flex flex-col gap-[8rem] mb-[6.75rem]'>
            <Service image={card1} cardTitle={`THE DINING ROOM (restaurant)`}
            text={ <>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br/>
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown<br/>
                printer took a galley of type and scrambled it to make a type specimen book.
            </>}></Service>

            <Service image={card2} cardTitle={`ALL RISE (bakery))`}
            text={ <>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br/>
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown<br/>
            printer took a galley of type and scrambled it to make a type specimen book.
            </>}>
            </Service>

            <Service image={card3} cardTitle={`GATHER YOUR PEERS (live music & bar)`}
            text={ <>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br/>
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown<br/>
            printer took a galley of type and scrambled it to make a type specimen book.
            </>}>
            </Service>

            <Service image={card4} cardTitle={`HOLD COURT (private Dinning)`}
            text={ <>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br/>
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown<br/>
            printer took a galley of type and scrambled it to make a type specimen book.
            </>}>
            </Service>
            </div>

            
        </div>
    );
};

export default Services;