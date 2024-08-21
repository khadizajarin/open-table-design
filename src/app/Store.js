import imagee from '@/assets/appstore image-01.png'
import shadow from '@/assets/appstore shadow-01.png'
import { Ubuntu } from 'next/font/google';
import Image from 'next/image';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '500','700'], 
  });
  

const Store = () => {
    return (
        <div className='flex justify-center bg-[#0B1519] '>
        <div className=' px-[5rem] pb-[6rem] '
        style ={{fontFamily: ubuntu.style.fontFamily}}>

            {/* Main Content */}
            <div className='flex relative shadow-black shadow-[1px_1px_15px_rgba(0,0,0,0.1),10px_10px_15px_rgba(0,0,0,0.2)]'>
            <div className='absolute'>
                <Image 
                    src={shadow}
                    className='object-cover h-[16rem] opacity-20'
                    alt="Shadow"
                />
            </div>
                <div>
                    <Image className='z-20 relative w-[17rem] h-[16rem]' src={imagee} alt="App Store"></Image>
                </div>

                <div className='text-[#BCA263] bg-[#042423] flex flex-col gap-[2rem] pr-[3rem] pl-[4rem] justify-center text-[1.7rem] font-medium tracking-wider'>
                    <p>Use this app to find our restaurant and book <br/> a reservation online.</p>
                    <p className=''>Check all our activities here...</p>
                </div>

                <div className='bg-[#042423] flex flex-col gap-[2rem] px-[5rem] justify-center '>
                    <div className='bg-[#BCA263] rounded-[0.5rem] w-[9.5rem] h-[3rem] z-20 flex items-center justify-center gap-[0.7rem] text-[#042423] shadow-black shadow-[1px_1px_3px_rgba(0,0,0,0.1),5px_5px_10px_rgba(0,0,0,0.2)]'>
                        {/* Button 1 Content */}
                        <div className='bg-[#042423] rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center'>
                            <FaApple size={15} className='text-[#BCA263]' />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <span className='font-bold text-[0.5rem] tracking-normal'>DOWNLOAD ON THE</span> 
                            <span className='font-[650] text-[1rem] leading-none tracking-tighter'>App Store</span>
                        </div>
                    </div>

                    <div className='bg-[#BCA263] rounded-[0.5rem] w-[9.5rem] h-[3rem] z-20 flex items-center justify-center gap-[0.7rem] text-[#042423] shadow-black shadow-[1px_1px_3px_rgba(0,0,0,0.1),5px_5px_10px_rgba(0,0,0,0.2)]'>
                        {/* Button 2 Content */}
                        <div className='bg-[#042423] rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center'>
                            <FaGooglePlay size={14} className='text-[#BCA263]' />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <span className='font-bold text-[0.5rem] tracking-normal'>DOWNLOAD ON THE</span> 
                            <span className='font-[650] text-[1rem] leading-none tracking-tighter'>Google Play</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Store;
