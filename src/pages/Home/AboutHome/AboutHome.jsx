import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const AboutHome = () => {
    return (
        <div className="hero my-20 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} className="w-4/5 first-letter: rounded-lg shadow-2xl" alt='' />
                    <img src={parts} className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='w-1/2 space-y-6'>
                    <p className='text-2xl text-orange-500 font-bold'>About Us</p>
                    <h1 className="text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p className=" marker:">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className=" ">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3818] border-0">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;