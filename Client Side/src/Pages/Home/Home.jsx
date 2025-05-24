import FeaturedGroups from '../../Components/FeaturedGroupes/FeaturedGroups';
import Hero from '../../Components/Hero/Hero';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';

const Home = () => {
    const title = "Featured Groups";
    return (
      <>
        <Hero></Hero>
        <div className="w-11/12 md:w-10/12 mx-auto mt-10 md:mt-20 mb-10">
          <FeaturedGroups title={title}></FeaturedGroups>
        </div>

        <HowItWorks></HowItWorks>
      </>
    );
};

export default Home;