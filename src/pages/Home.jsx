import React from 'react';

const Home = () => {

    

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
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;