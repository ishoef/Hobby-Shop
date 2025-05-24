import React from 'react';
import FeaturedGroups from '../../Components/FeaturedGroupes/FeaturedGroups';

const AllGroups = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto mt-5 md:mt-20 mb-10'>
            <h1 className='title text-center'>Explore All Groups</h1>
            <FeaturedGroups></FeaturedGroups>
        </div>
    );
};

export default AllGroups;