import axios from 'axios';

const cardDetails = async ({params}) => {

    const response = await axios(`http://localhost:5000/cardDetail/${params.id}`)
    // const data = await response.json()

    return response.data;
};

export default cardDetails;