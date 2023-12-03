import React, { useState } from 'react';
import img1 from '../../../assets/svg/groups-selected.svg';
import img2 from '../../../assets/svg/pages-unselected.svg';
import img3 from '../../../assets/svg/events-selected.svg';
import img4 from '../../../assets/svg/instagram-grey.svg';
import img5 from '../../../assets/svg/email-campaigns-unselected.svg';
import home from '../../../assets/Logo/home.png';

const ServicesCard = () => {
    const [activeCard, setActiveCard] = useState(null);

    const data = [
        {
            Title: 'Facebook Groups',
            imageUrl: img1,
        },
        {
            Title: 'Facebook Pages',
            imageUrl: img2,
        },
        {
            Title: 'Facebook Events',
            imageUrl: img3,
        },
        {
            Title: 'Email Campaigns',
            imageUrl: img4,
        },
        {
            Title: 'Instagram',
            imageUrl: img5,
        },
    ];

    return (
        <section className="rounded shadow bg-white">
            <div className="px-4 sm:px-8 py-4 sm:py-8">
                <div className="flex gap-3 items-center">
                    <img src={home} className="h-10 sm:h-12 object-cover" alt="" />
                    <h3 className="text-2xl sm:text-3xl font-medium">Dashboard</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-4 sm:mt-10 pb-8 sm:pb-12 pr-4 sm:pr-6">
                    {data.map((nm, i) => (
                        <div
                            key={i}
                            className="rounded border p-4 sm:p-6 flex flex-col items-center transition-all text-black duration-300 hover:bg-[#FF5FC0] hover:text-white cursor-pointer"
                            onClick={() => setActiveCard(i)}
                        >
                            <img className="h-12 sm:h-14 object-cover mb-2" src={nm.imageUrl} alt="" />
                            <h4 className="text-lg sm:text-xl text-center">{nm.Title}</h4>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default ServicesCard;
