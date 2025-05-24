import React, { useEffect } from 'react';
import CreateGroup from '../CreateGroup/CreateGroup';
import CreatedGroups from '../../Components/CreatedGroups/CreatedGroups';
import NoCreatedGroups from '../../Components/NoCreatedGroups/NoCreatedGroups';

const MyGroupes = () => {
    useEffect(() => {
      document.title = "My Groups | Hobby Shop";
    }, []);
    return (
        <div>
            <CreatedGroups></CreatedGroups>
        </div>
    );
};

export default MyGroupes;