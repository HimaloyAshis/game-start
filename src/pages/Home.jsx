import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import ThreeCard from './ThreeCard/ThreeCard';

const Home = () => {

    const {data: collegeCard= []} = useQuery({
        queryKey:['collegeCard'],
        queryFn: async ()=>{
            const res = await axios('http://localhost:5000/colleges/cards')
            return res.data
        }
    })

    console.log(collegeCard)

    return (
        <>
            <section>
                <div>
                    <div className='flex justify-center transparent items-center'>
                        <input className='text-center px-1 py-1 rounded m-4' type="text" name="collegeName" id="" placeholder='College Name' />
                    </div>

                </div>
            </section>

            {/* 3 card */}

            <section>
                <div className=''>
                    {collegeCard.map(card=> <ThreeCard key={card._id} card={card}></ThreeCard>)}
                </div> 
            </section>

        </>
    );
};

export default Home;