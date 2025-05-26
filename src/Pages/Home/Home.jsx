import React from "react";
import FeaturedGroups from "../../Components/FeaturedGroupes/FeaturedGroups";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import UserTestimonial from "../../Components/UserTestimonial/UserTestimonial";
import { useLoaderData } from "react-router";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  // Set the document title
  React.useEffect(() => {
    document.title = "Home | Hobby Shop";
  }, []);
  const title = "Featured Groups";

  const groupsData = useLoaderData();

  const today = new Date();

  // Step 1: Filter only upcoming groups (startDate > today)
  const upcomingGroups = groupsData.filter(
    (group) => new Date(group.startDate) > today
  );

  // Step 2: Sort by soonest startDate (ascending)
  const sortedUpcomingGroups = upcomingGroups.sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  // Step 3: Take the first 8 upcoming groups
  const eightGroups = sortedUpcomingGroups.slice(0, 6);

  const className = "grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-10/12 mx-auto"; 

  return (
    <>
      <Slider></Slider>
      <div className="w-11/12 md:w-10/12  mx-auto mt-10 md:mt-20 mb-10">
        <FeaturedGroups
          className={className}
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
