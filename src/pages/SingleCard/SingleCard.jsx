import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCard = () => {

    const data = useLoaderData()
    const { _id, admission_date, college_image, college_name, event, admission_process, rating, research_history, sports, events_details, research_works, sports_categories } = data
    console.log(data)

    return (
        <div className='bg-[#0E2954] p-4'>
            <div className="  bg-base-100 shadow-xl" >
                <figure><img className='w-full' src={college_image} alt="colleges" /></figure>
                <div className="p">
                    <h2 className="card-title font-bold ml-10 mt-3 space-y-3">College: <span className='text-2xl'> {college_name}</span></h2>
                    <div className='mb-3 gap-3 p-10 space-y-4'><span className='text-xl font-bold'>Admission process </span> {
                        admission_process.map((process, index) =>

                            <div key={index} className=''>

                                <p></p>
                                <p className='font-semibold'><span className='font-bold'>step</span> {index + 1}: {process.step}</p>
                                <p className='font-semibold'><span className='font-bold'>description</span>: {process.description}</p>

                            </div>

                        )

                    }

                        < div className='space-y-4 '>
                            <p className='font-bold mt-10 space-y-2 text-2xl'>Event Detail</p>
                            {
                                events_details.map((events, index) =>

                                    <div>
                                        <p key={index} className='font-semibold'><span className='font-bold'>Event</span> {index + 1}. {events.event} </p>
                                        <p key={index} className='font-semibold'><span className='font-bold'>Description</span>: {events.description} </p>
                                    </div>
                                )
                            }
                        </div>


                        < div className='space-y-4 mt-5'>
                            <p className='font-bold mt-5 space-y-2 text-2xl'>Research Works</p>
                            {
                                research_works.map((works, index) =>

                                    <div>
                                        <p key={index} className='font-semibold'><span className='font-bold'>Title</span> {index + 1}. {works.title} </p>
                                        <p key={index} className='font-semibold'><span className='font-bold'>Faculty</span>: {works.faculty} </p>
                                        <p key={index} className='font-semibold'><span className='font-bold'>Description</span>: {works.description} </p>
                                    </div>
                                )
                            }
                        </div>
                        < div className='space-y-4 mt-5'>
                            <p className='font-bold mt-5 space-y-2 text-2xl'>Sports Category</p>
                            {
                                sports_categories.map((sport, index) =>

                                    <div>
                                        <p key={index} className='font-semibold'><span className='font-bold'>Category</span> {index + 1}. {sport.category} </p>
                                        {/* <p key={index} className='font-semibold'><span className='font-bold'>Faculty</span>: {works.faculty} </p>
                                        <p key={index} className='font-semibold'><span className='font-bold'>Description</span>: {works.description} </p> */}
                                        {
                                            sport.sports.map(sp=> 
                                                <div>
                                                    <p key={index} className='font-semibold'><span className='font-bold'>sports. </span> {sp} </p>
                                                </div>
                                                )
                                        }
                                        
                                    </div>
                                )

                               
                            }


                    </div>

                </div>
            </div>
        </div>
        </div >
    );
};

export default SingleCard;