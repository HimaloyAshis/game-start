import React from 'react';

const CollegeNameCard = ({ card }) => {

    const { _id, admission_date, college_image, college_name, event, number_of_research, rating, research_history, sports } = card

    return (
        <div className=" bg-[#3F2E3E]  text-white shadow-xl" >
            <figure><img className='w-full' src={college_image} alt="colleges" /></figure>
            <div className="p-3">
                <h2 className="card-title font-bold  mt-3 space-y-3">College: <span className='text-2xl'> {college_name}</span></h2>
                <p>Rating: {rating}</p>
                <p>Number_of_research: {number_of_research}</p>
                <p>Admission_date: {admission_date}</p>
            </div>
        </div>
    );
};

export default CollegeNameCard;