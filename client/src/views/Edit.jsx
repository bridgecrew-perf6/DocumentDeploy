
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';



const Edit = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [desc, setDesc] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const {id} = useParams()
    const [errArray, setErrArray] = useState([])
    const history = useHistory()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then(res=>{
            setName(res.data.name)
            setType(res.data.type)
            setDesc(res.data.desc)
            setSkill1(res.data.skill1)
            setSkill2(res.data.skill2)
            setSkill3(res.data.skill3)
        })
        .catch(err=>console.log("Error: ", err))
    },[])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/${id}`,{
            name,
            type,
            desc,
            skill1,
            skill2,
            skill3
        })
        .then(res=>{
            history.push("/")
        })
        .catch(err=>{
            const errResponse = err.response.data.errors
            console.log(err.response.data.errors)
            let tempArr = [];
            for(const key in errResponse){
                if(errResponse.hasOwnProperty(key)){
                    console.log(errResponse[key].message)
                    tempArr.push(errResponse[key].message)
                }
            
            }
            setErrArray(tempArr)
        })
    }



return <>
<form onSubmit={onSubmitHandler}>
    <p>
        <label>Pet Name</label>
        <input type="text" name='name' value={name} onChange={e=>setName(e.target.value)}/>
    </p>
    <p>
        <label>Pet Type</label>
        <input type="text" name='type' value={type} onChange={e=>setType(e.target.value)}/>
    </p>
    <p>
        <label>Pet Description</label>
        <input type="text" name='type' value={desc} onChange={e=>setDesc(e.target.value)}/>
    </p>

    <p>
        <label>Pet Skill 1</label>
        <input type="text" name='skill1' value={skill1} onChange={e=>setSkill1(e.target.value)}/>
    </p>
    <p>
        <label>Pet Skill 2</label>
        <input type="text" name='skill2' value={skill2} onChange={e=>setSkill2(e.target.value)}/>
    </p>
    <p>
        <label>Pet Skill 3</label>
        <input type="text" name='skill3' value={skill3} onChange={e=>setSkill3(e.target.value)}/>
    </p>
    <input type="submit"/>
</form>

{
            errArray.map((err, i)=>(
                <p key={i}>{err}</p>
            ))

        }
</>
};

export default Edit;
