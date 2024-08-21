import imagee from '@/assets/appstore image-01.png'
import shadow from '@/assets/appstore shadow-01.png'
import { Ubuntu } from 'next/font/google';
import Image from 'next/image';

const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '500','700'], 
  });
  

const Store = () => {
    return (
        <div className=''>
        <div className='bg-[#0B1519] px-[8rem] pb-[6rem]'
        style ={{fontFamily: ubuntu.style.fontFamily}}>

            {/* Main Content */}
            <div className='flex relative'>
            <div className='absolute'>
                <Image 
                    src={shadow}
                    className='object-cover'
                    alt="Shadow"
                />
            </div>
                <div>
                    <Image className='z-20 relative w-[18rem] h-[16rem]' src={imagee} alt="App Store"></Image>
                </div>

                <div className='text-[#BCA263] bg-[#042423] p-4 flex flex-col gap-[1rem] px-[4rem] justify-center text-[1.5rem] font-medium tracking-wider'>
                    <p>Use this app to find our restaurant and book <br/> a reservation online.</p>
                    <p className=''>Check all our activities here...</p>
                </div>

                <div className='bg-[#042423] flex flex-col gap-[2rem] p-[4rem] justify-center'>
                    <div className='bg-[#BCA263] rounded-[0.5rem] w-[8rem] h-[3rem] flex items-center justify-center'>
                        {/* Button 1 Content */}
                    </div>
                    <div className='bg-[#BCA263] rounded-[0.5rem] w-[8rem] h-[3rem] flex items-center justify-center'>
                        {/* Button 2 Content */}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Store;
