/* eslint-disable react/no-unescaped-entities */
import Heading from "./CommonComps/Heading";
import { Cinzel,Ubuntu } from 'next/font/google';
import event1 from '@/assets/Event01-01.png';
import event2 from '@/assets/Event02-01.png';
import event3 from '@/assets/Event03-01.png';
import UpcomingCard from "./CommonComps/UpcomingCard";

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '700','900'], 
  });

const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '500','700'], 
  });
  

const Upcoming = () => {
    return (
        <div className="bg-[#0B1519] flex justify-center items-center flex-col pb-[7.125rem]">

            <div className=' mb-[4.375rem]'>
                <Heading  text={'UPCOMING EVENTS'}></Heading>
            </div>

            <p className='pb-[5rem] text-[#BCA263] text-[1.3125rem] text-center px-[11.25rem] tracking-wider leading-loose'
            style ={{fontFamily: ubuntu.style.fontFamily, fontSize: '1.5rem', fontWeight: '400'}}>
                Lorem Ipsum ips simply dummy text of the printing and typesetting industry. Lorem <br/>
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown <br/>
                printer took a galley of type and scrambled it to make a type specimen book. It has <br/>
                survived notonly five centuries, but also the leap into electronic typesetting, <br/>
                remaining essentially unchanged.
            </p>

            <div className="flex flex-row gap-[6.5rem]">
                <UpcomingCard image={event1} eventName={'TASTING DAY'} day={'Wednesday'} date={'17 Dec'} time={'11pm To 5pm'} ></UpcomingCard>
                <UpcomingCard image={event2} eventName={'DISCO NIGHT'} day={'Tuesday'} date={'30 Dec'} time={'12pm To 3.30pm'} ></UpcomingCard>
                <UpcomingCard image={event3} eventName={'COCKTAILS PARTY'} day={'Saturday'} date={'06 Feb'} time={'12pm To 3pm'} ></UpcomingCard>
            </div>
            
        </div>
    );
};

export default Upcoming;