import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import BannerDetails from './BannerDetails';

const BannerHome = () => {

    const bannerInfos = [
        {
            id: "slide1",
            img: img5,
            leftSlide: "#slide6",
            rightSlide: "#slide2"
        },
        {
            id: "slide2",
            img: img2,
            leftSlide: "#slide1",
            rightSlide: "#slide3"
        },
        {
            id: "slide3",
            img: img3,
            leftSlide: "#slide2",
            rightSlide: "#slide4"
        },
        {
            id: "slide4",
            img: img4,
            leftSlide: "#slide3",
            rightSlide: "#slide5"
        },
        {
            id: "slide5",
            img: img1,
            leftSlide: "#slide4",
            rightSlide: "#slide6"
        },
        {
            id: "slide6",
            img: img6,
            leftSlide: "#slide5",
            rightSlide: "#slide1"
        },
    ]
    
    return (
        <div className="carousel w-full  ">
            {
                bannerInfos.map(bannerInfo => <BannerDetails
                key={bannerInfo.id}
                bannerInfo={bannerInfo}
                ></BannerDetails>)
            }
        </div>
    );
};

export default BannerHome;