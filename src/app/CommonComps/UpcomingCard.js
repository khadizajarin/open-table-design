import Image from 'next/image';
import { Cinzel,Ubuntu } from 'next/font/google';

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


const UpcomingCard = ({image,eventName, day,date, time, }) => {
    return (
        <div>
            <Image className='w-[22.5rem] h-[27rem] shadow-black shadow-[1px_-1px_5px_rgba(0,0,0,0.2),3px_3px_8px_rgba(0,0,0,0.2)]'
            src={image}
            alt={image}>
            </Image>

            <div className='text-[#BCA263] text-center' 
            style ={{fontFamily: ubuntu.style.fontFamily, fontSize: '1.5rem', fontWeight: '430'}}>
              <h1 className='pt-[3.25rem] text-[2.3rem] font-bold tracking-wide'>{eventName}</h1>
              <p className='pt-[1.4rem] text-[1.7rem] font-light'>{day}, {date}</p>
              <p className='pt-[0.4rem] text-[1.7rem] font-light'>Reservations {time}</p>
            </div>



            
        </div>
    );
};

export default UpcomingCard;