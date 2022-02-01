import React, {useState, useEffect} from "react";
import axios from 'axios'
import {useParams} from "react-router-dom"
import DeleteButton from "../components/DeleteButton";
import {Link} from 'react-router-dom'

const Detail = () =>{
    const [pet, setPet] = useState("")
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then (res => setPet(res.data))
        .catch(err => console.log(err))
    },[])

    return (
        <>
    <Link to={`/`}> Main menu</Link>
        <h6>ID: 
            {pet._id}
        </h6>
        <h2>Name:</h2>
        <h1>  
            {pet.name}
        </h1>
        <h2>Type:</h2>
        <h1> 
            {pet.type}
        </h1>
        <h2>Description:</h2>
        <h4>
        {pet.desc}
        </h4>
        <h2>Skills:</h2>
        <h4>
        {pet.skill1}
        </h4>
        <h4>
        {pet.skill2}
        </h4>
        <h4>
        {pet.skill3}
        </h4>
        <DeleteButton id={pet._id}/>
        </>
    )
}

export default Detail