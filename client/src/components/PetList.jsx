import React from 'react';
import {Link} from 'react-router-dom'
export default props => {
    return (
        <div>
            <h1>Pet Shelter</h1>
            <table>
                <thead>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            Type
                        </td>
                    </tr>
                </thead>
                <tbody>
                        {props.pet.map((pet, index)=>(
                    <tr>
                    <td>
                        <h2>
                            {pet.name}
                        </h2>

                    </td>
                    <td>
                        <h4>
                            {pet.type}
                        </h4>
                    </td>
                    <td>
                        <Link to={`/pet/${pet._id}`}>
                            Details  |
                        </Link>
                        <Link to={`/pet/${pet._id}/edit`}>  edit</Link>
                    </td>
                    </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}