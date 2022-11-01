import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const ServicesHome = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20'>
            <div className='text-center space-y-3 mb-10'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p className='w-1/3 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    services.map( service => <ServicesCard
                    key={service._id}
                    service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='text-center mt-12'>
                <button className='btn btn-outline border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:border-0'>More Services</button>
            </div>
        </div>
    );
};

export default ServicesHome;