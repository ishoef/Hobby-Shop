import React from "react";
import FeaturedGroups from "../../Components/FeaturedGroupes/FeaturedGroups";
import Hero from "../../Components/Hero/Hero";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import UserTestimonial from "../../Components/UserTestimonial/UserTestimonial";
import { useLoaderData} from "react-router";
import Slider from "../../Components/Slider/Slider";
import DateTimeDisplay from "../../Components/DateTimeDisplay/DateTimeDisplay";

const Home = () => {
  // Set the document title
  React.useEffect(() => {
    document.title = "Home | Hobby Shop";
  }, []);
  const title = "Featured Groups";

  const groupsData = useLoaderData();

  const sortedGroups = [...groupsData].sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );

  const eightGroups = sortedGroups.slice(0, 8);
  console.log("Featured Groups:", eightGroups);

  return (
    <>
      <DateTimeDisplay></DateTimeDisplay>
      <Slider></Slider>
      <div className="w-11/12 md:w-10/12  mx-auto mt-10 md:mt-20 mb-10">
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
