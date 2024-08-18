import { Cinzel } from 'next/font/google';


const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '700','900'], // Specify the weights you need
  });


const Heading = ({text}) => {
    return (
        <div 
        className='inline-block py-6 px-10 shadow-black shadow-[10px_10px_15px_0_rgba(0,0,0,0.2)] text-center bg-[#042423] text-[#BCA263] rounded-full border-l-[0.9rem] border-r-[0.9rem] border-[#BCA263] tracking-wider' 
        style={{ fontFamily: cinzel.style.fontFamily, fontSize: '2.3rem', fontWeight: '700' }}
    >
        {text}
    </div>
    
    );
};

export default Heading;