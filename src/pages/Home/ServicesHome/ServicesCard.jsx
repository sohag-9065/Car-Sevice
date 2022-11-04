import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { _id, img, name, price } = service;
    // console.log(service);
    return (
        <div className="card card-compact   bg-base-100 shadow-xl">
            <figure><img src={img} alt="" className='h-60'/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions text-2xl  justify-between items-center text-orange-600 ">
                    <p className=' font-semibold'>Price: {price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary"><FaArrowRight/></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;