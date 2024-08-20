import { Cinzel,Ubuntu } from 'next/font/google';
import Image from 'next/image';
import bannerImage from "@/assets/banner.png";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import bannerShadow from '@/assets/shadowBanner-01.png';

// Import the Cinzel font
const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '700','900'], // Specify the weights you need
  });

// Import the Ubuntu font
const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '500','700'], // Specify the weights you need
  });
  

const Banner = () => {
    return (
        <div className='flex  bg-[#042423]'>
            <div className='w-3/5'>
                <Image 
                    src={bannerImage}
                    className='w-[rem]'
                    alt="Shadow"
                />
            </div>

         


            {/* form for booking */}

            <div className='flex flex-col justify-center items-center h-full text-center text-[#BCA263] w-2/5 pt-[4rem] relative'>

                {/* Shadow Image Positioned to Cover Entire Container */}
                <div className='absolute top-0 left-0 w-full h-full'>
                    <Image 
                        src={bannerShadow}
                        className='object-cover m-0 p-0'
                        alt="Shadow"
                    />
                </div>

                <h1 className='mb-5 tracking-wider' style ={{fontFamily: ubuntu.style.fontFamily, fontSize: '1.5rem', fontWeight: '430'}}>RESERVATION</h1>
                <h3 className='mb-8 leading-tight' style ={{fontFamily: cinzel.style.fontFamily, fontSize: '3rem', fontWeight: '700'}}>MAKE A <br/> RESERVATION</h3>
                <div className='flex flex-col justify-center items-center text-[#BCA263] w-96' style ={{fontFamily: ubuntu.style.fontFamily, fontSize: '1.5rem', fontWeight: '430'}}>
                    <TextField 
                        id="standard-basic" 
                        label="Guest."
                        variant="standard" 
                        InputLabelProps={{
                            style: { color: '#BCA263',fontFamily: ubuntu.style.fontFamily, fontSize: '1.8rem', fontWeight: '430', marginBottom:"1.625rem" }, 
                        }}
                        InputProps={{
                            style: { color: '#BCA263',fontFamily: ubuntu.style.fontFamily, fontSize: '1.8rem', fontWeight: '400', marginBottom:"1.625rem", paddingBottom: "0.9rem"}, 
                            disableUnderline: false, 
                        }}
                        sx={{
                            '& .MuiInput-underline:before': {
                                borderBottomColor: '#BCA263', // Default underline color
                            },
                            '& .MuiInput-underline:hover:before': {
                                borderBottomColor: '#BCA263 !important', // Hover underline color
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#BCA263', // Focused underline color
                            },
                            '& .MuiInput-underline:hover:after': {
                                borderBottomColor: '#BCA263', // Ensure focus color doesn't change on hover
                            },
                            '& .Mui-focused:after': {
                                borderBottomColor: '#BCA263', // Color when the input is focused
                            },
                        }}
                    />
                    <TextField 
                        id="standard-basic" 
                        label="Date." 
                        variant="standard" 
                        InputLabelProps={{
                            style: { color: '#BCA263', fontFamily: ubuntu.style.fontFamily, fontSize: '1.8rem', fontWeight: '430', marginBottom:"1.625rem"},
                        }}
                        InputProps={{
                            style: { color: '#BCA263', fontFamily: ubuntu.style.fontFamily, fontSize: '1.8rem', fontWeight: '400', marginBottom:"1.625rem", paddingBottom: "0.9rem" },
                            disableUnderline: false,
                        }}
                        sx={{
                            '& .MuiInput-underline:before': {
                                borderBottomColor: '#BCA263', // Default underline color
                            },
                            '& .MuiInput-underline:hover:before': {
                                borderBottomColor: '#BCA263 !important', // Hover underline color
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#BCA263', // Focused underline color
                            },
                            '& .MuiInput-underline:hover:after': {
                                borderBottomColor: '#BCA263', // Ensure focus color doesn't change on hover
                            },
                            '& .Mui-focused:after': {
                                borderBottomColor: '#BCA263', // Color when the input is focused
                            },
                        }}
                    />
                    <TextField 
                        id="standard-basic" 
                        label="Time." 
                        variant="standard" 
                        InputLabelProps={{
                            style: { color: '#BCA263',fontFamily: ubuntu.style.fontFamily, fontSize: '1.8rem', fontWeight: '430', marginBottom:"4rem" },
                        }}
                        InputProps={{
                            style: { color: '#BCA263',fontFamily: ubuntu.style.fontFamily, fontSize: '1.8rem', fontWeight: '400', marginBottom:"4rem", paddingBottom: "0.9rem" },
                            disableUnderline: false,
                        }}
                        sx={{
                            '& .MuiInput-underline:before': {
                                borderBottomColor: '#BCA263', // Default underline color
                            },
                            '& .MuiInput-underline:hover:before': {
                                borderBottomColor: '#BCA263 !important', // Hover underline color
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#BCA263', // Focused underline color
                            },
                            '& .MuiInput-underline:hover:after': {
                                borderBottomColor: '#BCA263', // Ensure focus color doesn't change on hover
                            },
                            '& .Mui-focused:after': {
                                borderBottomColor: '#BCA263', // Color when the input is focused
                            },
                        }}
                    />
                    <Button 
                    className='bg-[#BCA263] text-[#042423] w-96 rounded-none p-[2rem] h-[3rem]'
                    style={{fontFamily: ubuntu.style.fontFamily, fontSize: '1.5rem', fontWeight: '800'}}
                    >BOOK A TABLE</Button>
                </div>
            </div>


        </div>
    );
};

export default Banner;