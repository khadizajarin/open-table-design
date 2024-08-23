import { Cinzel, Ubuntu } from 'next/font/google';
import Image from 'next/image';
import bannerImage from "@/assets/banner.png";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import bannerShadowwwwwwww from '@/assets/Shadow Banner-01.png';

// Import the Cinzel font
const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '700', '900'],
});

// Import the Ubuntu font
const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row bg-[#042423] '>
            <div className='lg:w-3/5'>
                <Image 
                    src={bannerImage}
                    className='w-full'
                    alt="Banner"
                />
            </div>

            {/* Form for booking */}
            <div className='flex flex-col justify-center items-center lg:h-full text-center text-[#BCA263] lg:w-2/5 lg:pt-[4rem] pt-[2rem] pb-[0.7rem] relative'>

                {/* Shadow Image Positioned to Cover Entire Container */}
                <div className='absolute top-0 left-0 lg:w-full lg:h-full'>
                    <Image 
                        src={bannerShadowwwwwwww}
                        className='lg:object-cover opacity-40'
                        alt="Shadow"
                    />
                </div>

                <h1 className='mb-5 tracking-wider lg:text-[1.5rem] text-[1rem]' style={{ fontFamily: ubuntu.style.fontFamily, fontWeight: '430' }}>RESERVATION</h1>
                <h3 className='lg:mb-8 leading-tight lg:text-[3rem] text-[1.5rem]' style={{ fontFamily: cinzel.style.fontFamily,  fontWeight: '700' }}>MAKE A <br /> RESERVATION</h3>
                <div className='flex flex-col justify-center items-center text-[#BCA263] w-96 lg:text-[1.5rem] ' style={{ fontFamily: ubuntu.style.fontFamily,  fontWeight: '430' }}>
                    <TextField 
                        id="standard-basic" 
                        className='lg:w-96'
                        label="Guest." 
                        variant="standard" 
                        InputLabelProps={{
                            style: { color: '#BCA263',fontFamily: ubuntu.style.fontFamily, fontSize: '1.8rem', fontWeight: '430', marginBottom:"1.625rem" },  
                        }}
                        InputProps={{
                            style: { color: '#BCA263', fontFamily: ubuntu.style.fontFamily, fontSize: '1.5rem', fontWeight: '400', marginBottom: "1.625rem", paddingBottom: "0.9rem" }, 
                            disableUnderline: false, 
                        }}
                        sx={{
                            '& .MuiInput-underline:before': {
                                borderBottomColor: '#BCA263',
                            },
                            '& .MuiInput-underline:hover:before': {
                                borderBottomColor: '#BCA263 !important',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#BCA263',
                            },
                            '& .MuiInput-underline:hover:after': {
                                borderBottomColor: '#BCA263',
                            },
                            '& .Mui-focused:after': {
                                borderBottomColor: '#BCA263',
                            },
                        }}
                    />
                    <TextField 
                        id="standard-basic" 
                        className='lg:w-96 mb-[1.625rem]'
                        label="Date." 
                        variant="standard" 
                        InputLabelProps={{
                            style: { color: '#BCA263',fontFamily: ubuntu.style.fontFamily, fontSize: '1.8rem', fontWeight: '430', marginBottom:"1.625rem" },  
                        }}
                        InputProps={{
                            style: { color: '#BCA263', fontFamily: ubuntu.style.fontFamily, fontSize: '1.5rem', fontWeight: '400',  paddingBottom: "0.9rem" }, 
                            disableUnderline: false, 
                        }}
                        sx={{
                            '& .MuiInput-underline:before': {
                                borderBottomColor: '#BCA263',
                            },
                            '& .MuiInput-underline:hover:before': {
                                borderBottomColor: '#BCA263 !important',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#BCA263',
                            },
                            '& .MuiInput-underline:hover:after': {
                                borderBottomColor: '#BCA263',
                            },
                            '& .Mui-focused:after': {
                                borderBottomColor: '#BCA263',
                            },
                        }}
                    />
                    <TextField 
                        id="standard-basic" 
                        className='lg:w-96 lg:mb-[4rem] mb-[2rem]'
                        label="Time." 
                        variant="standard" 
                        InputLabelProps={{
                            style: { color: '#BCA263',fontFamily: ubuntu.style.fontFamily, fontSize: '1.8rem', fontWeight: '430', marginBottom:"1.625rem" }, 
                        }}
                        InputProps={{
                            style: { color: '#BCA263', fontFamily: ubuntu.style.fontFamily, fontSize: '1.5rem', fontWeight: '400',  paddingBottom: "0.9rem" }, 
                            disableUnderline: false, 
                        }}
                        sx={{
                            '& .MuiInput-underline:before': {
                                borderBottomColor: '#BCA263',
                            },
                            '& .MuiInput-underline:hover:before': {
                                borderBottomColor: '#BCA263 !important',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#BCA263',
                            },
                            '& .MuiInput-underline:hover:after': {
                                borderBottomColor: '#BCA263',
                            },
                            '& .Mui-focused:after': {
                                borderBottomColor: '#BCA263',
                            },
                        }}
                    />
                    <Button 
                        className='bg-[#BCA263] text-[#042423] lg:text-[1.5rem] text-[1rem] lg:w-96 w-80 rounded-none lg:p-[2rem] lg:h-[3rem] '
                        style={{ fontFamily: ubuntu.style.fontFamily,  fontWeight: '800' }}
                    >
                        BOOK A TABLE
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
