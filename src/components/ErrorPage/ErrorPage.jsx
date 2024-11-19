import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
             <h1 className='text-8xl'> Opps.....page does not found </h1>
              <NavLink  to='/' className="btn btn-outline px-8 py-4 mt-6">Please Go Back</NavLink>
        </div>
    );
};

export default ErrorPage;