import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { HiCurrencyDollar } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
const Feature = ({job}) => {
    const {id,logo,job_title,company_name, remote_or_onsite,location} =  job
    return (
        <div className='border rounded-lg shadow-lg p-10 space-y-4'>
           <img className='mb-8' src={logo} alt="" />
            <h3 className='font-extrabold text-2xl'>{job_title} </h3>
            <h3 className='font-medium text-[20px]'>{company_name} </h3>
            <div className='space-x-5'>
            <button className="btn btn-outline btn-primary">{remote_or_onsite} </button>
            <button className="btn btn-outline btn-primary">{remote_or_onsite} </button>
            </div>
            <div className='text-[#757575] '>
                <div className='flex items-center gap-2'>
                    < CiLocationOn  className='text-2xl'/>
                    <h3 className='text-2xl font-semibold'>{location} </h3>
                </div>
                <div className='flex items-center gap-2'>
                    <HiCurrencyDollar className='text-2xl' />
                    <h3 className='text-2xl font-semibold'> {location} </h3>
                </div>
            </div>
            <NavLink to={`feature/${id}`} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[#FFFFFF] px-10 py-5">View Details </NavLink>
        </div>
    );
};

export default Feature;