import axios from "axios";

// is not working 
// will remove it later 
const getCrops = async (req,res) => {
    try {

        const response = await axios.get('https://openfarm.cc/api/v1/crops/');
        console.log(response.data);

    } catch (error) {

        console.error(error);
        
    }
};

export default getCrops;