import React from 'react';
import './BannerDetails.css'

const BannerDetails = ({ bannerInfo }) => {
    const { id, img, leftSlide, rightSlide } = bannerInfo;

    function scrollWin() {
        console.log("first")
        window.scroll(0, 0);
    }

    return (
        <div id={id} className="carousel-item  relative w-full text-white">
            <div className='carousel-img'>
                <img src={img} className="w-[1280px]  rounded-xl h-[800px]" alt='' />
            </div>
            <div className="absolute  transform -translate-y-1/2 left-24 top-2/4">
                <h1 className='text-6xl font-bold mb-8 '>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h1>
                <p className='text-xl w-2/5 mb-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <button className="btn bg-[#FF3818] mr-8 border-0 text-white">Discover More</button>
                <button className="btn btn-outline  border-2 border-white  text-white hover:bg-orange-600 hover:text-white hover:border-0">Latest Project</button>
            </div>

            <div className="absolute flex justify-end space-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a onClick={scrollWin} href={leftSlide} className="btn btn-circle bg-slate-400  border-0">❮</a>
                <a onClick={scrollWin} href={rightSlide} className="btn btn-circle bg-slate-400  border-0">❯</a>
            </div>
        </div>
    );
};

export default BannerDetails;