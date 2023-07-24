import axios from 'axios';

const cardDetails = async ({params}) => {

    const response = await axios(`https://start-game-back-end.vercel.app/cardDetail/${params.id}`)
    // const data = await response.json()

    return response.data;
};

export default cardDetails;