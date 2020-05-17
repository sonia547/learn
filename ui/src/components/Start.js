import React from 'react';
import End from './End'

function Start()
{
    const data1={name:"Panduri1"}
    const data2={name:"Panduri2"}
    const data3={name:"Panduri3"}
return (
    <div>
    <h1>Hello Sonia Kishore Panduris</h1>
    <End data={{name:"Panduri1"}}/>
    <End data={"data2"}/>
    <End data={data3}/>
    </div>
)

}

export default Start