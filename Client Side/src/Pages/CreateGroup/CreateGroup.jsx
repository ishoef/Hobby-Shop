import React, { use } from 'react';
import CreateGroupForm from '../../Components/CreateGroupForm/CreateGroupForm';
import { AuthContext } from '../../Context/AuthProvider';

const CreateGroup = () => {

    const { user } = use(AuthContext);

    return (
        <div className='py-20'>
            <CreateGroupForm user={user}></CreateGroupForm>
        </div>
    );
};

export default CreateGroup;