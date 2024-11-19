import React from 'react';

const Category = () => {
    return (
        <div>
            <div className='mt-32'>
            <h1 className='font-extrabold text-[48px] text-center'> Job Category List </h1>
            <p className='font-medium text-base text-center'> Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-4 gap-7 mt-6'>
            <div className='bg-gradient-to-r from-gray-300 to-gray-400 p-10 rounded-lg'>
                <div className='bg-gradient-to-r from-gray-200 to-gray-300 p-5 rounded-lg w-20 h-20'>
                    <img src="../../../public/career-hub-Design/mobile.png" alt="" />
                </div>
                <h3 className='font-extrabold text-[20px] text-[#474747]'>Account & Finance</h3>
                <p className='font-medium text-[#A3A3A3]'>300 Jobs Available</p>
            </div>
            <div className='bg-gradient-to-r from-gray-300 to-gray-400 p-10 rounded-lg'>
                <div className='bg-gradient-to-r from-gray-200 to-gray-300 p-5 rounded-lg w-20 h-20'>
                    <img src="../../../public/career-hub-Design/mobile.png" alt="" />
                </div>
                <h3 className='font-extrabold text-[20px] text-[#474747]'>Account & Finance</h3>
                <p className='font-medium text-[#A3A3A3]'>300 Jobs Available</p>
            </div>
            <div className='bg-gradient-to-r from-gray-300 to-gray-400 p-10 rounded-lg '>
                <div className='bg-gradient-to-r from-gray-200 to-gray-300 p-5 rounded-lg w-20 h-20'>
                    <img src="../../../public/career-hub-Design/mobile.png" alt="" />
                </div>
                <h3 className='font-extrabold text-[20px] text-[#474747]'>Account & Finance</h3>
                <p className='font-medium text-[#A3A3A3]'>300 Jobs Available</p>
            </div>
            <div className='bg-gradient-to-r from-gray-300 to-gray-400 p-10 rounded-lg'>
                <div className='bg-gradient-to-r from-gray-200 to-gray-300 p-5 rounded-lg w-20 h-20'>
                    <img src="../../../public/career-hub-Design/mobile.png" alt="" />
                </div>
                <h3 className='font-extrabold text-[20px] text-[#474747]'>Account & Finance</h3>
                <p className='font-medium text-[#A3A3A3]'>300 Jobs Available</p>
            </div>
            </div>
        </div>
    );
};

export default Category;