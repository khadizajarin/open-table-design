import logo from "@/assets/logo-01.png";
import Image from "next/image";
import shadoww from '@/assets/Untitled-1-01.png'
import lineIcon from '@/assets/Footericon-01.png'
import lineIcon2 from '@/assets/Footericon-02-01.png'

import { Ubuntu } from 'next/font/google';


const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '500','700'],
  });


const Footer = () => {
    return (
        <div className='bg-[#042423] text-[#BCA263] flex flex-col justify-center items-center relative '
            style={{ fontFamily: ubuntu.style.fontFamily }}>

            <div className='absolute opacity-20'>
                <Image 
                    src={shadoww}
                    className='lg:inline hidden'
                    alt="Shadow"
                />
            </div>


            <div className=' z-10 lg:mt-[5rem] mt-[2rem] pb-[4rem]'>
                <Image
                    src={logo}
                    className='w-[11rem]'
                    alt="Logo"
                />
            </div>

            <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-[2rem] gap-[1rem] pb-[4rem]">
                <p style={{ fontSize: '1.5rem', fontWeight: '500' }}>INSTAGRAM</p>
                <Image src={lineIcon} className='h-[0.6rem] w-[9rem]' alt="lineIcon"/> 
                <p style={{ fontSize: '1.5rem', fontWeight: '500' }}>FACEBOOK</p>
                <Image src={lineIcon} className='h-[0.6rem] w-[9rem]' alt="lineIcon"/> 
                <p style={{ fontSize: '1.5rem', fontWeight: '500' }}>PINTEREST</p>
            </div>

            <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-[4rem] gap-[1rem] lg:pb-[4.4rem] pb-[2rem]">
                <div className='text-[#BCA263] text-center ' 
                style ={{ fontSize: '1rem', fontWeight: '430'}}>
                <h1 className='text-[1.8rem] font-bold tracking-wide'>OPENING HOURS</h1>
                <p className='lg:pt-[1.4rem] pt-[0.7rem] text-[1.3rem] font-light'>Everyday : 24 Hours.</p>
                <p className='pt-[0.4rem] text-[1.3rem] font-light'>Kitchen Closes At 22.00</p>
                </div>
                
                <Image src={lineIcon2} className='lg:h-[12rem] h-[4rem] lg:w-[1rem] w-[0.5rem]' alt="lineIcon"/>

                <div className='text-[#BCA263] text-center' 
                style ={{ fontSize: '1rem', fontWeight: '430'}}>
                <h1 className=' text-[1.8rem] font-bold tracking-wide'>ADDRESS</h1>
                <p className='lg:pt-[1.4rem] pt-[0.7rem] text-[1.3rem] font-light'>123 Omolghosh Street, Old Town</p>
                <p className='pt-[0.4rem] text-[1.3rem] font-light'>Dhaka, Bangladesh</p>
                </div>
                
                <Image src={lineIcon2} className='lg:h-[12rem] h-[4rem] lg:w-[1rem] w-[0.5rem]' alt="lineIcon"/>

                <div className='text-[#BCA263] text-center' 
                style ={{ fontSize: '1rem', fontWeight: '430'}}>
                <h1 className=' text-[1.8rem] font-bold tracking-wide'>CONTACT US</h1>
                <p className='lg:pt-[1.4rem] pt-[0.7rem] text-[1.3rem] font-light'>+12 34 567 89</p>
                <p className='pt-[0.4rem] text-[1.3rem] font-light'>openroyal@example.com</p>
                </div>

               
            </div>

            <div className="lg:h-[4rem] h-[3rem] w-full text-[#042423] lg:text-[1.2rem] text-[0.8rem] font-bold bg-[#BCA263] flex justify-center items-center">
                <p>Copyright © 2024 Gearbros. All Rights Reserved</p>
            </div>

            
        </div>
    );
};

export default Footer;