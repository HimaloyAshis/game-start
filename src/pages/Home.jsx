import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import ThreeCard from './ThreeCard/ThreeCard';
import reviews from '../api/reviews';
import Review from './review/Review';

const Home = () => {

    const { data: collegeCard = [] } = useQuery({
        queryKey: ['collegeCard'],
        queryFn: async () => {
            const res = await axios('https://start-game-back-end.vercel.app/colleges/cards')
            return res.data
        }
    })

    // console.log(collegeCard)

    const [review] = reviews()
    console.log(review)

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
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2'>
                    {collegeCard.map(card => <ThreeCard key={card._id} card={card}></ThreeCard>)}
                </div>
            </section>

            {/* college graduates group pictures */}

            <section className='mt-10 pb-10'>
                <p className='text-center text-3xl text-white font-bold'>Graduates student from different college</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 p-4 ml-4' >
                    <div className='' data-aos="zoom-in" data-aos-easing="linear"
                        data-aos-duration="2000">
                        <p className='font-bold text-xl my-4 text-white'>Kabi Nazrul Govt. College</p>
                        <img className='w-80' src="https://img.freepik.com/free-photo/multinational-graduates-male-female-celebrating-graduation-university-campus-removing-their-graduation-hats-smiling-camera_496169-1297.jpg?size=626&ext=jpg&ga=GA1.2.1842592228.1683275805&semt=ais" alt="" />
                    </div>
                    <div className='' data-aos="zoom-in" data-aos-easing="linear"
                        data-aos-duration="2000">
                        <p className='font-bold text-xl my-4 text-white'>Kabi Nazrul Govt. College</p>
                        <img className='w-80' src="https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201827.jpg?size=626&ext=jpg&ga=GA1.2.1842592228.1683275805&semt=ais" alt="" />
                    </div>
                    <div className='' data-aos="zoom-in" data-aos-easing="linear"
                        data-aos-duration="2000">
                        <p className='font-bold text-xl my-4 text-white'>Govt. Bangla College</p>
                        <img className='w-80' src="https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201851.jpg?size=626&ext=jpg&ga=GA1.2.1842592228.1683275805&semt=ais" alt="" />
                    </div>
                    <div className='' data-aos="zoom-in" data-aos-easing="linear"
                        data-aos-duration="2000">
                        <p className='font-bold text-xl my-4 text-white'>Dhaka College</p>
                        <img className='w-80' src="https://img.freepik.com/free-photo/medium-shot-colleagues-posing-together_23-2148950574.jpg?size=626&ext=jpg&ga=GA1.2.1842592228.1683275805&semt=ais" alt="" />
                    </div>
                    <div className='' data-aos="zoom-in" data-aos-easing="linear"
                        data-aos-duration="2000">
                        <p className='font-bold text-xl my-4 text-white'>Govt. BM College</p>
                        <img className='w-80' src="https://img.freepik.com/free-photo/two-international-graduate-celebrating-graduation-university-campus-looking-camera_496169-1349.jpg?size=626&ext=jpg&ga=GA1.2.1842592228.1683275805&semt=ais" alt="" />
                    </div>
                    <div className='' data-aos="zoom-in" data-aos-easing="linear"
                        data-aos-duration="2000">
                        <p className='font-bold text-xl my-4 text-white'>Govt. Titumir College</p>
                        <img className='w-80' src="https://img.freepik.com/free-photo/graduation-concept-with-girls-taking-selfie_23-2148201825.jpg?size=626&ext=jpg&ga=GA1.2.1842592228.1683275805&semt=ais" alt="" />
                    </div>
                </div>

            </section>

            {/* reviews section */}

            <section className='mt-10 pb-10'>
                <h1 className='font-bold text-3xl text-center text-white my-10'>Previous student's Feedback and reviews for different college</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        review.map((review, index) => <Review key={index} review={review} ></Review>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Home;