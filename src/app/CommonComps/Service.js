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
        <div className='z-10 bg-[#042423] w-[78rem] shadow-black shadow-[2px_-2px_10px_rgba(0,0,0,0.2),10px_10px_15px_rgba(0,0,0,0.2)]'>
            <Image
            src={image}
            alt={image}
            ></Image>

            <div className='h-[24.6rem] relative'>

                {/* Shadow Image Positioned to Cover Entire Container */}
                <div className='absolute'>
                    <Image 
                        src={cardShadow}
                        className=''
                        alt="Shadow"
                    />
                </div>

                <h1 className='pb-[1.7rem] pt-[3rem] text-[#BCA263] text-[2rem] text-center'
                style ={{fontFamily: cinzel.style.fontFamily, fontSize: '2.7rem', fontWeight: '700' }}>{cardTitle}</h1>

                <div className='flex justify-center items-center'>
                    <hr className='border-[#BCA263] w-[12rem] pb-[2.375rem]'/>
                </div>

                <p className='pb-[3rem] text-[#BCA263]  text-center px-[11.25rem] tracking-wider leading-loose'
                style ={{fontFamily: ubuntu.style.fontFamily, fontSize: '1.1rem', fontWeight: '400'}}>{text}</p>

                <div className='flex justify-center items-center'>
                    <Image className='w-[16rem]' src={cardFinisher} alt={cardFinisher}></Image>
                </div>

            </div>
        </div>
    );
};

export default Service;