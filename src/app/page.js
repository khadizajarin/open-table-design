import Store from "./Store";
import Banner from "./Banner";
import Services from "./Services";
import Upcoming from "./Upcoming";
import Memories from "./Memories";


const Homepage = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Upcoming></Upcoming>
      <Store></Store>
      <Memories></Memories>
    </>
  );
};

export default Homepage;