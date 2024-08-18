import Image from 'next/image';
import logo from "@/assets/logo-01.png";
import shado from "@/assets/shadow nav-01.png";

const TitleBar = () => {
    return (
        <div className='relative h-[10rem] w-full bg-[#032625] flex justify-center items-center overflow-hidden'>
            {/* Shadow Image Positioned to Cover Entire Container */}
            <div className='absolute inset-0 opacity-20'>
                <Image 
                    src={shado}
                    className='w-full h-full object-cover'
                    alt="Shadow"
                />
            </div>

            {/* Logo in the Center */}
            <div className='relative z-10'>
                <Image 
                    src={logo}
                    className='w-[16rem]'
                    alt="Logo"
                />
            </div>
        </div>
    );
};

export default TitleBar;
