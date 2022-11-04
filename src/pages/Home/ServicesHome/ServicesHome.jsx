import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import './ServicesHome.css'

const ServicesHome = () => {
    const [services, setServices] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(2);

    useEffect(() => {
        fetch(`https://genious-car-server-ecru.vercel.app/services?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setServices(data.services);

            })
    }, [page, size]);

    const pages = Math.ceil(count / size);

    const handleChange = changePage => {
        setSize(changePage);
        setPage(0);
    }

    return (
        <div className='my-20'>
            <div className='text-center space-y-3 mb-10'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p className='w-1/3 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className="pagination my-12 text-center">
                <p>Currently selected page: {page} and size: {size}</p>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        className={page === number ? 'selected ' : ''}
                        onClick={() => setPage(number)}
                    >
                        {number + 1}
                    </button>)
                }
                <select onChange={event => handleChange(event.target.value) } >
                    <option value="1">1</option>
                    <option value="2" defaultValue>2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            {/* <div className='text-center mt-12'>
                <button className='btn btn-outline border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:border-0'>More Services</button>
            </div> */}
        </div>
    );
};

export default ServicesHome;