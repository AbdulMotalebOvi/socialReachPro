import React from 'react';
import banner from '../../../assets/Banner/banner.png';
import Button from '../../../Buttons/Button/Button';
import BtnVrTwo from '../../../Buttons/ButtonVrTwo/BtnVrTwo';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                objectFit: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                height: '900px',

                // Set minimum height for the hero section
            }}
        >
            <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-xl sm:w-full ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl sm:text-5xl font-extrabold uppercase text-[#012B6D]">
                        Let the Fun Begin!
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                        Get ahead of the game. Automate your Facebook parties by scheduling your posts ahead of time. Then just sit back, relax, and enjoy the party!
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row  justify-center sm:justify-start gap-4 text-center">
                        <Link to='/login'><Button title='Sign in' /></Link>
                        <Link to='/SignUp'><BtnVrTwo title='Create a free account' /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
