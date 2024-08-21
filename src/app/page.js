import Store from "./Store";
import Banner from "./Banner";
import Services from "./Services";
import Upcoming from "./Upcoming";


const Homepage = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Upcoming></Upcoming>
      <Store></Store>
    </>
  );
};

export default Homepage;