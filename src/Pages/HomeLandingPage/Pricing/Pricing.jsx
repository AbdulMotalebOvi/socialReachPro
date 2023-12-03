import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { FaCheck } from 'react-icons/fa';
import ButtonWhite from '../../../Buttons/ButtonVrTwo/BtnVrTwo';

const Pricing = () => {
    // Define an array of pricing plan objects
    const pricingPlans = [
        {
            title: 'Starter',
            price: '$20/month',
            features: ['10 users included', '2GB of storage', 'Email Support', 'Help Center Access'],
        },
        {
            title: 'Pro',
            price: '$30/month',
            features: [
                '20 users included',
                '5GB of storage',
                'Email Support',
                'Help Center Access',
                'Phone Support',
                'Community Access',
            ],
        },
        {
            title: 'Starter',
            price: '$20/month',
            features: ['10 users included', '2GB of storage', 'Email Support', 'Help Center Access'],
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto my-10">
            <SectionTitle
                header="Our Plan"
                desc="SocialReachPro's goal is to make it as quick and easy as possible for you to prepare and run your Facebook parties."
            />
            <div className="bg-white px-4 py-6 md:px-8 lg:px-12 xl:px-16 mt-10">
                <div className="flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-4 xl:gap-8 border">
                    {/* Map over the pricingPlans array to generate pricing cards */}
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`flex-1 p-4 space-y-4 md:space-y-10 text-center ${plan.title === 'Pro' ? 'bg-[#E744A6] text-white' : ''
                                }`}
                        >
                            <h2 className="text-2xl md:text-4xl font-semibold">{plan.title}</h2>

                            <ul className="mt-2 md:mt-4">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className={`flex justify-center space-y-2 md:space-y-4 items-center ${plan.title === 'Pro' ? 'font-semibold' : ''
                                            } gap-2`}
                                    >
                                        <FaCheck className="text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <h1 className="text-3xl md:text-4xl font-bold mt-4">{plan.price}</h1>
                            <div>
                                <ButtonWhite title="Buy Now" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Pricing;
