import React from 'react';
import { Link } from 'react-router-dom';

const ThreeCard = ({ card }) => {

    const { _id, admission_date, college_image, college_name, event, number_of_research, rating, research_history, sports } = card
    // console.log(_id)

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={college_image} alt="colleges" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">College:{college_name}</h2>
                    <p className='font-semibold'>admission_date: {admission_date}</p>
                    <p className='font-semibold'>Event: {event}</p>
                    <div className='mb-3'><span className='text-xl font-bold'>Research History</span> {
                        research_history.map((research, index) =>
                            <div key={index}>

                                <p>.{index + 1}</p>
                                <p className='font-semibold'>Faculty: {research.faculty}</p>
                                <p className='font-semibold'>Topic: {research.topic}</p>
                                <p className='font-semibold'>Year: {research.year}</p>

                            </div>

                        )

                    }
                        < div >
                            <p className='font-bold mt-3'>Sports</p>
                            {
                                sports.map((sport, index) => <p key={index}>{index + 1}. {sport} </p>)
                            }
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/singleCard/${_id}`} className="butn btn-primary ">Know more</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ThreeCard;