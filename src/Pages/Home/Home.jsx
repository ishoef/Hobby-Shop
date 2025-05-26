import React from "react";
import FeaturedGroups from "../../Components/FeaturedGroupes/FeaturedGroups";
import Hero from "../../Components/Hero/Hero";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import UserTestimonial from "../../Components/UserTestimonial/UserTestimonial";
import { useLoaderData} from "react-router";

const Home = () => {
  // Set the document title
  React.useEffect(() => {
    document.title = "Home | Hobby Shop";
  }, []);
  const title = "Featured Groups";

  const groupsData = useLoaderData();

  const eightGroups = groupsData.slice(0, 8);
  console.log("Featured Groups:", eightGroups);

  return (
    <>
      <Hero></Hero>
      <div className="w-11/12 md:w-10/12 mx-auto mt-10 md:mt-20 mb-10">
        <FeaturedGroups
          groupsData={eightGroups}
          showSeeAll={true}
          title={title}
        ></FeaturedGroups>
      </div>
      <HowItWorks></HowItWorks>
      <UserTestimonial></UserTestimonial>
    </>
  );
};

export default Home;
