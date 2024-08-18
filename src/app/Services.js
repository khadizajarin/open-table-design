/* eslint-disable react/no-unescaped-entities */
import { Cinzel, Ubuntu } from 'next/font/google';
import Heading from './CommonComps/Heading';

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
  

const Services = () => {
    return (
        <div className='bg-[#0B1519] flex justify-center items-center flex-col'>
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
            
        </div>
    );
};

export default Services;