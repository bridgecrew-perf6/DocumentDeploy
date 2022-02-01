import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import PetList from '../components/PetList';


export default () => {
    const [pet, setPet] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet')
        .then(res=>setPet(res.data))
        .catch(err=>console.log("Error: ", err))
    },[])
    return(
        <>
            <Link to={`/pets/new`}> Add a new pet</Link>
            <PetList pet={pet}/>
        </>
    )
}