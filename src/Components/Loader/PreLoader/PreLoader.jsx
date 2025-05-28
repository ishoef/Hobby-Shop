import Lottie from 'lottie-react';
import React from 'react';
import preloder from '../../../assets/PreLoader.json';


const PreLoader = () => {
    return (
      <div className='flex justify-center items-center min-h-[calc(100vh-300px)]'>  
        <Lottie
          style={{ width: "200px" }}
          animationData={preloder}
          loop={true}
        ></Lottie>
      </div>
    );
};

export default PreLoader;