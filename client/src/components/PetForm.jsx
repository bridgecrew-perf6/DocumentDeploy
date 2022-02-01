import React, {useState} from "react";
import axios from 'axios'
import { useHistory} from "react-router-dom";

export default props =>{
    const [type, setType] = useState("")
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [errArray, setErrArray] = useState([])
    const history = useHistory()

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pet",{
            name,
            type,
            desc,
            skill1,
            skill2,
            skill3
        })
        .then(res=>{history.push("/")})
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

    
    return(
        <>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Pet Name</label>
                <input type="text" onChange={e=>setName(e.target.value)}/>
            </p>
            <p>
                <label>Pet Type</label>
                <input type="text" onChange={e=>setType(e.target.value)}/>
            </p>
            <p>
                <label>Pet Description</label>
                <input type="text" onChange={e=>setDesc(e.target.value)}/>
            </p>

            <p>
                <label>Pet Skill 1</label>
                <input type="text" onChange={e=>setSkill1(e.target.value)}/>
            </p>
            <p>
                <label>Pet Skill 2</label>
                <input type="text" onChange={e=>setSkill2(e.target.value)}/>
            </p>
            <p>
                <label>Pet Skills 3</label>
                <input type="text" onChange={e=>setSkill3(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>

        {
            errArray.map((err, i)=>(
                <p key={i}>{err}</p>
            ))

        }
        </>
    )
}