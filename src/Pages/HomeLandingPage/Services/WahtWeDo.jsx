import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import facebook from '../../../assets/svg/fb.png'
import two from '../../../assets/weDo/two.png'
import three from '../../../assets/weDo/three.png'
import four from '../../../assets/weDo/four.png'
import five from '../../../assets/weDo/five.png'
import six from '../../../assets/weDo/six.png'
import seven from '../../../assets/weDo/seven.png'

const WahtWeDo = () => {
    return (
        <section className='my-10  '>
            <SectionTitle header='What We Do' />
            <div>
                <VerticalTimeline lineColor='#012B6D' >
                    {/* facebook */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work relative"
                        contentStyle={{
                            background: '#fff',
                            position: 'relative',
                            color: 'black',
                            zIndex: '100', // Increase the z-index to bring content to the front
                            boxShadow: '1px 4px 7px 2px rgba(0, 0, 0, 0.25)',
                        }}
                        contentArrowStyle={{ border: 'none' }}

                        iconStyle={{
                            background: '#012B6D',
                            position: 'absolute',
                            zIndex: '0', // Lower z-index to position it behind content
                            width: '26px',
                            height: '26px',
                            top: '80px',
                            marginLeft: '-15px'

                        }}
                    >
                        <img
                            className="after:hidden sm:block w-[50px] h-[50px] lg:w-[50px] absolute top-[-50px] bottom-0 left-5 object-cover"
                            src={facebook}
                            alt=""
                            style={{ zIndex: '1' }} // Increase the z-index to bring the image to the front
                        />

                        <h3 className="vertical-timeline-element-title font-bold text-[18px]">SCHEDULED FACEBOOK POSTS & COMMENTS</h3>
                        <p className='text-[16px]'>
                            Schedule automated posts and comments to your Facebook parties and business pages. Now you can pay less attention to preparing your posts on the spot, and spend more time interacting with your party guests.
                        </p>
                    </VerticalTimelineElement>

                    {/* instagram */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work relative" // Add "relative" class
                        contentStyle={{
                            background: '#E744A6',
                            position: 'relative',
                            display: 'block',
                            color: 'white',
                            boxShadow: '1px 4px 7px 2px rgba(0, 0, 0, 0.25)',
                        }}
                        contentArrowStyle={{ border: 'none' }}
                        iconStyle={{
                            background: '#012B6D',
                            position: 'absolute',
                            zIndex: '0', // Lower z-index to position it behind content
                            width: '26px',
                            height: '26px',
                            top: '80px',
                            marginLeft: '-15px'

                        }}
                    >
                        <img
                            className="after:w-[70px] hidden sm:block h-[70px] lg:w-[70px] absolute top-[-60px] bottom-0 left-[80%] object-cover"
                            src={two}
                            alt=""
                            style={{ zIndex: '-1' }} // Increase the z-index for the image
                        />

                        <h3 className="vertical-timeline-element-title font-bold text-[18px]">Scheduled Instagram Posts</h3>
                        <p className='text-[16px]'>
                            Auto posting to Instagram allows you to provide value to your customers and connect with them by putting a face to your brand without taking over your day.
                        </p>
                    </VerticalTimelineElement>

                    {/* photos */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{
                            background: '#E744A6',
                            position: 'relative',
                            display: 'block',
                            color: 'white',
                            boxShadow: '1px 4px 7px 2px rgba(0, 0, 0, 0.25)'
                        }}
                        contentArrowStyle={{ border: 'none' }}
                        iconStyle={{
                            background: '#012B6D',
                            position: 'absolute',
                            zIndex: '0', // Lower z-index to position it behind content
                            width: '26px',
                            height: '26px',
                            top: '80px',
                            marginLeft: '-15px'

                        }}
                    >
                        <img
                            className="after:w-[70px] hidden sm:block  h-[70px] lg:w-[70px]  absolute top-[-60px] bottom-0 left-6 object-cover"
                            src={three}
                            alt=""
                            style={{ zIndex: '-1' }}
                        />

                        <h3 className="vertical-timeline-element-title font-bold text-[18px] ">Multi-Image Support</h3>
                        <p className='text-[16px]'>
                            Marketing Madness allows you to set up a single Facebook post to have as many images attached to it as you need.
                        </p>
                        {/* Use group-hover to show the image */}

                    </VerticalTimelineElement>
                    {/* post */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{
                            background: '#fff',
                            position: 'relative',
                            display: 'block',
                            color: 'black',
                            boxShadow: '1px 4px 7px 2px rgba(0, 0, 0, 0.25)'
                        }}
                        contentArrowStyle={{ border: 'none' }}
                        iconStyle={{
                            background: '#012B6D',
                            position: 'absolute',
                            zIndex: '0', // Lower z-index to position it behind content
                            width: '26px',
                            height: '26px',
                            top: '80px',
                            marginLeft: '-15px'

                        }}
                    >
                        <img
                            className="after:w-[70px] hidden sm:block  h-[70px] lg:w-[70px]  absolute top-[-65px] bottom-0 left-[80%] object-cover"
                            src={four}
                            alt=""
                            style={{ zIndex: '-1' }}
                        />

                        <h3 className="vertical-timeline-element-title font-bold text-[18px]">Adjust Posts on The Fly</h3>
                        <p className='text-[16px]'>
                            As your Facebook party dragging on, or maybe it's going amazing? Adjust your upcoming scheduled posts to either slow down or speed up!.
                        </p>
                        {/* Use group-hover to show the image */}

                    </VerticalTimelineElement>
                    {/* templates */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{
                            background: '#fff',
                            position: 'relative',
                            display: 'block',
                            color: 'black',
                            boxShadow: '1px 4px 7px 2px rgba(0, 0, 0, 0.25)'
                        }}
                        contentArrowStyle={{ border: 'none' }}
                        iconStyle={{
                            background: '#012B6D',
                            position: 'absolute',
                            zIndex: '0', // Lower z-index to position it behind content
                            width: '26px',
                            height: '26px',
                            top: '80px',
                            marginLeft: '-15px'

                        }}
                    >
                        <img
                            className="after:w-[50px] hidden sm:block  h-[50px] lg:w-[50px]  absolute top-[-45px] bottom-0  left-6 object-cover"
                            src={five}
                            alt=""
                            style={{ zIndex: '-1' }}
                        />

                        <h3 className="vertical-timeline-element-title font-bold text-[18px]">Party Templates</h3>
                        <p className='text-[16px]'>
                            Do you follow a template with your parties? With Marketing Madness, you can easily create and update your party templates. When they are ready to be used you can bring them into your Facebook Groups and Pages. Reuse them over and over to save precious pre-party planning.
                        </p>
                        {/* Use group-hover to show the image */}

                    </VerticalTimelineElement>
                    {/* share */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{
                            background: '#E744A6',
                            position: 'relative',
                            display: 'block',
                            color: 'white',

                            boxShadow: '1px 4px 7px 2px rgba(0, 0, 0, 0.25)'
                        }}
                        contentArrowStyle={{ border: 'none' }}
                        iconStyle={{
                            background: '#012B6D',
                            position: 'absolute',
                            zIndex: '0', // Lower z-index to position it behind content
                            width: '26px',
                            height: '26px',
                            top: '80px',
                            marginLeft: '-15px'

                        }}
                    >
                        <img
                            className="after:w-[70px] hidden sm:block  h-[70px] lg:w-[70px]  absolute top-[-60px] bottom-0  left-[80%] object-cover"
                            src={six}
                            alt=""
                            style={{ zIndex: '-1' }}
                        />

                        <h3 className="vertical-timeline-element-title font-bold text-[18px]">Share Content</h3>
                        <p className='text-[16px]'>
                            With Marketing Madness, it is easy to share your templates and images with friends. Every template and image folder has a 'share code'. Pass this code to a friend, co-worker, or downline and they can easily bring in your content into their account.
                        </p>
                        {/* Use group-hover to show the image */}

                    </VerticalTimelineElement>
                    {/* free tier */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{
                            background: '#E744A6',
                            position: 'relative',
                            display: 'block',
                            color: 'white',
                            boxShadow: '1px 4px 7px 2px rgba(0, 0, 0, 0.25)'
                        }}
                        contentArrowStyle={{ border: 'none' }}
                        iconStyle={{
                            background: '#012B6D',
                            position: 'absolute',
                            zIndex: '0', // Lower z-index to position it behind content
                            width: '26px',
                            height: '26px',
                            top: '80px',
                            marginLeft: '-15px'

                        }}
                    >
                        <img
                            className="after:w-[70px] hidden sm:block  h-[70px] lg:w-[70px]  absolute top-[-50px] bottom-0 left-6  object-cover"
                            src={seven}
                            alt=""
                            style={{ zIndex: '-1' }}
                        />

                        <h3 className="vertical-timeline-element-title font-bold text-[18px] ">Free Tier</h3>
                        <p className='text-[16px]'>
                            We don't want to make money unless you are. If you are new to the business, or if you're just going to take a break, you can stay on our free plan and still run a limited number of parties per month. There's no penalty to switching back and forth between a subscription and the free tier.
                        </p>
                        {/* Use group-hover to show the image */}

                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </section >
    )
}

export default WahtWeDo