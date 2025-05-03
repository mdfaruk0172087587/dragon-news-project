import React, { use } from 'react';
import LoginWhit from '../components/LoginWhit';
import FindUs from '../components/FindUs';
import { AuthContext } from '../Provider/AuthContext';

const RightAsset = () => {
    const {user} = use(AuthContext);
    return (
        <div>
          {
            user? "":   <LoginWhit></LoginWhit>
          }
           <FindUs></FindUs>
        </div>
    );
};

export default RightAsset;