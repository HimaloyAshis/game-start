import React from 'react';

const Review = ({review}) => {

    const {academics,campusLife,careerServices,collegeName,diversityAndInclusion,facilities,tuitionAndFinancialAid,rating } = review

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl py-5">

            <div className="p-4" data-aos="zoom-in" data-aos-easing="linear"
                        data-aos-duration="2000">
                <h2 className="card-title text-xl font-bold">{collegeName}</h2>
                <p className='font-semibold '><span className='font-bold'>Academics</span>: {academics}</p>
                <p className='font-semibold '><span className='font-bold'>CampusLife</span>: {campusLife}</p>
                <p className='font-semibold '><span className='font-bold'>CareerServices</span>: {careerServices}</p>
                <p className='font-semibold '><span className='font-bold'>Facilities</span>: {facilities}</p>
                <p className='font-semibold '><span className='font-bold'>Rating</span>: {rating}</p>
            </div>
        </div>
    )
};

export default Review;