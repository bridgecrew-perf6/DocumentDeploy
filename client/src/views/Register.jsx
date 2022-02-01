import React, {useEffect, useState} from 'react';
import PetForm from '../components/PetForm';
import {Link} from 'react-router-dom'


export default () => {
    return(
        <>
            <Link to={`/`}> Main menu</Link>
            <PetForm/>
        </>
    )
}