import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import ThreeCard from './ThreeCard/ThreeCard';

const Home = () => {

    const { data: collegeCard = [] } = useQuery({
        queryKey: ['collegeCard'],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/colleges/cards')
            return res.data
        }
    })

    console.log(collegeCard)

    return (
        <div className='bg-[#6C3428] px-2'>
            <section className='mt-10'>
                <div>
                    <div className='flex justify-center transparent items-center'>
                        <div>
                            <h1 className='my-3 text-white font-bold text-2xl'>Search by college name</h1>
                            <input className='text-center px-1 py-1 rounded m-4' type="text" name="collegeName" id="" placeholder='College Name' />
                        </div>
                    </div>

                </div>
            </section>

            {/* 3 card */}

            <section className='mt-10'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                    {collegeCard.map(card => <ThreeCard key={card._id} card={card}></ThreeCard>)}
                </div>
            </section>

        </div>
    );
};

export default Home;