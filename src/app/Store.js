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
        <div className='flex justify-center bg-[#0B1519] lg:px-[6rem] lg:pb-[6rem] pb-[2rem]' style ={{fontFamily: ubuntu.style.fontFamily}}>

            {/* Main Content */}
            <div className='flex lg:flex-row flex-col relative shadow-black lg:shadow-[1px_1px_15px_rgba(0,0,0,0.1),10px_10px_15px_rgba(0,0,0,0.2)]'>
                <div className='absolute'>
                    <Image 
                        src={shadow}
                        className='object-cover lg:pl-[17rem] lg:pt-0 pt-[16rem] lg:h-[16rem] h-[27rem] opacity-30'
                        alt="Shadow"
                    />
                </div>

                <div>
                    <Image className='z-20 lg:w-[17rem] lg:h-[16rem] h-[16rem]' src={imagee} alt="App Store"></Image>
                </div>

                <div className='text-[#BCA263] bg-[rgb(4,36,35)] flex flex-col lg:gap-[2rem] gap-[0.5rem] lg:pr-[3rem] pl-[4rem] lg:py-0 py-[0.8rem] justify-center lg:text-[1.7rem] text-[1rem] font-medium tracking-wider'>
                    <p>Use this app to find our restaurant and book <span className="hidden lg:inline"><br /></span>  a reservation online.</p>
                    <p>Check all our activities here...</p>
                </div>

                <div className='bg-[#042423] flex lg:flex-col flex-row lg:gap-[2rem] gap-[0.8rem] lg:px-[5rem] lg:pb-0 pb-[1.3rem] justify-center '>
                    <div className='bg-[#BCA263] rounded-[0.5rem] w-[9.5rem] h-[3rem] z-20 flex items-center justify-center gap-[0.7rem] text-[#042423] shadow-black shadow-[1px_1px_3px_rgba(0,0,0,0.1),5px_5px_10px_rgba(0,0,0,0.2)]'>
                        {/* Button 1 Content */}
                        <div className='bg-[#042423] rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center'>
                            <FaApple size={15} className='text-[#BCA263]' />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <span className='font-bold lg:text-[0.5rem] text-[0.4rem] tracking-normal'>DOWNLOAD ON THE</span> 
                            <span className='font-[650] lg:text-[1rem] text-[0.7rem] leading-none tracking-tighter'>App Store</span>
                        </div>
                    </div>

                    <div className='bg-[#BCA263] rounded-[0.5rem] w-[9.5rem] h-[3rem] z-20 flex items-center justify-center gap-[0.7rem] text-[#042423] shadow-black shadow-[1px_1px_3px_rgba(0,0,0,0.1),5px_5px_10px_rgba(0,0,0,0.2)]'>
                        {/* Button 2 Content */}
                        <div className='bg-[#042423] rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center'>
                            <FaGooglePlay size={14} className='text-[#BCA263]' />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <span className='font-bold lg:text-[0.5rem] text-[0.4rem]  tracking-normal'>DOWNLOAD ON THE</span> 
                            <span className='font-[650] lg:text-[1rem] text-[0.7rem] leading-none tracking-tighter'>Google Play</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Store;
