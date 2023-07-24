import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import CollegeNameCard from './CollegeNameCard';

const CollegeName = () => {


    const { data: collegeCard = [] } = useQuery({
        queryKey: ['collegeCard'],
        queryFn: async () => {
            const res = await axios('https://start-game-back-end.vercel.app/collegeName')
            return res.data
        }
    })

    return (
        <div>
            <section className='mt-10'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                    {collegeCard.map(card => <CollegeNameCard key={card._id} card={card}></CollegeNameCard>)}
                </div>
            </section>
        </div>
    );
};

export default CollegeName;