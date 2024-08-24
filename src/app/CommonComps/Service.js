import Image from 'next/image';
import { Cinzel,Ubuntu } from 'next/font/google';
import cardShadow from '@/assets/cardInfoshadow-01.png'
import cardFinisher from '@/assets/CardFinisher-01.png'
const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '700','900'], 
  });

const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '500','700'], 
  });

const Service = ({image,cardTitle, text}) => {
    return (
        <div className='z-10 bg-[#042423] lg:w-[78rem] w-[18rem] shadow-black shadow-[2px_-2px_10px_rgba(0,0,0,0.2),10px_10px_15px_rgba(0,0,0,0.2)]'>
            <Image
            src={image}
            alt={image}
            ></Image>

            <div className='lg:h-[24.6rem] relative'>

                {/* Shadow Image Positioned to Cover Entire Container */}
                <div className='absolute  object-cover opacity-30'>
                    <Image 
                        src={cardShadow}
                        className='top-0 left-0 lg:w-full lg:h-full'
                        alt="Shadow"
                    />
                </div>

                <h1 className='lg:pb-[1.7rem] pb-[0.5rem] lg:pt-[3rem] pt-[1rem] text-[#BCA263] lg:text-[2.7rem] text-[1rem] px-[0.5rem] text-center'
                style ={{fontFamily: cinzel.style.fontFamily, fontWeight: '700' }}>{cardTitle}</h1>

                <div className='flex justify-center items-center'>
                    <hr className='border-[#BCA263] lg:w-[12rem] lg:pb-[2.375rem]'/>
                </div>

                <p className='lg:pb-[2rem] pb-[1rem] text-[#BCA263] text-center lg:px-[11.25rem] px-[0.5rem] lg:text-[1.1rem] text-[0.6rem] tracking-wider leading-loose'
                style ={{fontFamily: ubuntu.style.fontFamily, fontWeight: '400'}}>{text}</p>

                <div className='flex justify-center items-center'>
                    <Image className='lg:w-[16rem] w-[8rem]' src={cardFinisher} alt={cardFinisher}></Image>
                </div>

            </div>
        </div>
    );
};

export default Service;