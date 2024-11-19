import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='lg:flex items-center gap-20 px-5 lg:px-0'>
                <div className='space-y-6'>
                    <h1 className='font-extrabold text-7xl'>One Step <br /> Closer To Your <br /> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Dream Job</span></h1>
                    <p className='font-medium text-[18px] text-[#757575]'> Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[#FFFFFF] px-10 py-5">Get Started</button>
                </div>
                <div>
                    <img src="../../../public/career-hub-Design/banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;