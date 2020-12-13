import React from 'react';
import Data from './data.json';

function DashBoard() {
    return (
        <div className="App">
            <div className="posts">
                {Data.map(post =>{
                    return(
                        <>
                        <ul>
                            <li>{post.name}</li>
                            <li>{post.gender}</li>
                            <li>{post.email}</li>
                            <li>{post.phoneNo}</li>
                        </ul>
                        </ >
                    )
                })}
            </div>
        </div>
    )
}

export default DashBoard;
