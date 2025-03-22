import React, { useEffect } from 'react'
import axios from 'axios';

const AddCrop = () => {
    const [searchedCrop, setSearchedCrop] = useState("");
    const [crops,setCrops] = useState([]);

    useEffect(() => {
        const searchedCrops = () => {
            
        }
    },[])

  return (
    <div>
    <input type="text" value={searchedCrop} onChange={(e) => {setSearchedCrop(e.target.value)}} />
    </div>
  )
}

export default AddCrop
