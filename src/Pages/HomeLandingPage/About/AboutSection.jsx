import React from 'react';
import banner from '../../../assets/banner/bnnner_about.png';


const AboutSection = () => {
    return (
        <section className="my-10 bg-white"
        >
            <div
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: '100% auto', // Decrease the width of the background image
                    objectFit: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',

                }}
            >
                <div className='py-20 max-w-screen-xl mx-auto'>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-8'>
                        <div className='bg-[#012B6D] w-full sm:w-[330px] h-[380px] rounded-sm'>
                            <div className='flex flex-col text-white'>
                                <h2 className='font-bold text-[32px] px-[30px] pt-[25px] text-center'>
                                    SocialReachPro is FUN
                                </h2>
                                <p className='p-[20px]'>
                                    SocialReachPro has a strong sense of community built into it. You can
                                    share graphics and templates with your team members to help get off
                                    the ground running, or to inspire each other with new ideas.
                                </p>
                            </div>
                        </div>
                        <div className='bg-[#1955B4] w-full sm:w-[330px] h-[380px] rounded-sm'>
                            <div className='flex flex-col text-white'>
                                <h2 className='font-bold text-[32px] px-[30px] pt-[25px] text-center'>
                                    SocialReachPro is FUN
                                </h2>
                                <p className='p-[20px]'>
                                    SocialReachPro was made with you in mind. We know you don't want to
                                    spend hours learning the ins and outs of a new system. That's why we
                                    walk you through a test party. It only takes a few minutes, and at
                                    the end of it, you'll understand how Marketing Madness works.
                                </p>
                            </div>
                        </div>
                        <div className='bg-[#5295FF] w-full sm:w-[330px] h-[380px] rounded-sm'>
                            <div className='flex flex-col text-white'>
                                <h2 className='font-bold text-[32px] px-[30px] pt-[25px] text-center'>
                                    SocialReachPro is FUN
                                </h2>
                                <p className='p-[20px]'>
                                    From scheduled posting to Facebook - to automatically sending texts &
                                    emails to hostesses and new recruits, SocialReachPro offers a vast
                                    array of services to help you with your Facebook party business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    );
};

export default AboutSection;
