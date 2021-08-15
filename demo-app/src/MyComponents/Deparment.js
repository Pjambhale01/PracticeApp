import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Deparment = ()=>{
    const [state,setState] = useState([])
    
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/patient/').then(res => {
            setState(res.data)
        })
    },[])

    
    return(<div>
        <h1>Full stack</h1>
         {state.map(i=><li>{i.patient_name}{i.patient_email}</li>)}
    </div>)
}

export default Deparment