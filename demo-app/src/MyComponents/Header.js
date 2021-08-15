import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Header(){
    const[str,setStr] = useState([])
    const[temp,setTemp] = useState("")
    useEffect(()=>{
      axios.get("http://jsonplaceholder.typicode.com/users").then(res=>{
          setStr(res.data)
      })    
    },[])
    const handlsubmit=()=>{
        axios.put("http://jsonplaceholder.typicode.com/users").then(()=>{
                 setStr([...str,{...str,name:temp}],setTemp(""))          
 })
}

    
    // const handlsubmit=()=>{
    //     setStr([...str,{...str,name:temp}],setTemp(""))
        
    // } 

    return(
        <div>
            {str.map((i)=><ul><li>{i.name}</li></ul>)}
            <input type="text" value={temp} onChange={(e)=>setTemp(e.target.value)}></input>
            <button onClick={()=>handlsubmit()}>Add</button>
        </div>
    )
}
