import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServicesCard = ({ service }) => {
    const { img, title, price } = service;
    // console.log(service);
    return (
        <div className="card card-compact   bg-base-100 shadow-xl">
            <figure><img src={img} alt="" className='h-60'/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions text-2xl  justify-between items-center text-orange-600 ">
                    <p className=' font-semibold'>Price: {price}</p>
                    <button ><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;