import { Cinzel } from 'next/font/google';


const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '700','900'], // Specify the weights you need
  });


const Heading = ({text}) => {
    return (
        <div 
        className='lg:py-6 py-4 lg:px-10 px-5 shadow-black shadow-[10px_10px_15px_0_rgba(0,0,0,0.2)] text-center bg-[#042423] text-[#BCA263] rounded-full lg:border-l-[0.9rem] border-l-[0.5rem] lg:border-r-[0.9rem] border-r-[0.5rem] border-[#BCA263] tracking-wider lg:text-[2.3rem] text-[1.3rem]' 
        style={{ fontFamily: cinzel.style.fontFamily, fontWeight: '700' }}
    >
        {text}
    </div>
    
    );
};

export default Heading;