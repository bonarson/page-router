import React, { useState } from 'react';

function increment(){
    const[count,setCount]=useState(0);
    
    return(
        <div>
            <p> le nombre est : {count} </p>
            <button onClick={()=>setCount(count +1 )}>clic pour + 1</button>
            <br /> <br />
            <button onClick={()=>setCount(count-1)}>clic pour - 1</button>
        </div>
    )
}
export default  increment;

