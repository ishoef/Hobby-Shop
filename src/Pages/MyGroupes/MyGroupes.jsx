import React, { useEffect } from 'react';
import CreateGroup from '../CreateGroup/CreateGroup';
import CreatedGroups from '../../Components/CreatedGroups/CreatedGroups';
import NoCreatedGroups from '../../Components/NoCreatedGroups/NoCreatedGroups';
import { useLoaderData } from 'react-router';

const MyGroupes = () => {
    useEffect(() => {
      document.title = "My Groups | Hobby Shop";
    }, []);

    const groupsData = useLoaderData();

    if (!groupsData || groupsData.length === 0) {
        return <NoCreatedGroups></NoCreatedGroups>;
    }
    return (
        <div>
            <CreatedGroups groupsData={groupsData}></CreatedGroups>
        </div>
    );
};

export default MyGroupes;