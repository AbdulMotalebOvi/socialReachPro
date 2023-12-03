import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import img1 from '../../../assets/Clients/img-1.jpg'
import img2 from '../../../assets/Clients/img-2.jpg'
import img3 from '../../../assets/Clients/img3.jpg'
import phone from '../../../assets/Banner/phones.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../../../SectionTitle/SectionTitle';


const cardInfoArray = [
    {
        title: 'KELLI KARAU',
        id: 'CEO of NCA Network',
        des: "Marketing Madness was made with you in mind. We know you don't want to spend hours learning the ins and outs of a new system. That's why we walk you through a test party. It only takes a few minutes, and at the end of it, you'll understand how Marketing Madness works.",
        imageUrl: img1,
    },
    {
        title: "KIM WHITE",
        id: 'CEO of NCA Network',
        des: "Marketing Madness is so easy to use! I was able to set up my first party and get it rolling without any headaches! They are always quick to answer questions and the customer service is the BEST in the industry! I love it!",
        imageUrl: img2,
    },
    {
        title: "ALLIE LANE",
        id: 'CEO of NCA Network',
        des: "Marketing Madness has been such a lifesaver for my business! I am able to cook supper and play with my 15 month old son while my parties are running! All I have to do is monitor the posts and answer questions! Thank you, Marketing Madness!",
        imageUrl: img3,
    },

];

const HappyClients = () => {
    const sliderRef = useRef(null);

    const settings = {

        infinite: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };

    return (
        <section className="my-20">
            <div className="bg-[#EEE] py-8">
                <SectionTitle header="Testimonials" />
                <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
                    {/* Left Section */}
                    <div className="w-full lg:w-[60%]">
                        <div className="mx-auto max-w-screen-xl text-center w-full lg:w-3/4 xl:w-2/3">
                            <Slider {...settings} ref={sliderRef}>
                                {cardInfoArray.map((card, i) => (
                                    <blockquote
                                        className="flex h-[400px] flex-col justify-between p-6 shadow-sm sm:p-8 lg:p-12"
                                        key={i + 1}
                                    >
                                        <img className="w-[80px] m-auto h-[80px]" src={card.imageUrl} alt="" />
                                        <div>
                                            <div className="mt-4">
                                                <p className="text-2xl font-bold sm:text-3xl">
                                                    {card.title}
                                                </p>
                                                <p className="text-2xl sm:text-lg">
                                                    {card.id}
                                                </p>
                                                <p className="mt-4 leading-relaxed text-gray-700">
                                                    {card.des}
                                                </p>
                                            </div>
                                        </div>
                                    </blockquote>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="hidden lg:block lg:flex-1 relative">
                        <div className="w-[100px] h-[600px] lg:w-[400px] bg-[#012B6D] absolute top-3 bottom-0 right-0"></div>
                        <img
                            className="w-full h-full object-cover relative z-10 py-[32px]"
                            src={phone}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HappyClients;
