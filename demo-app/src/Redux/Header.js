import React, { useState } from 'react'
import { connect } from 'react-redux'

const Header=(props)=>{

    const [ state,setState] =useState("")

    const {name,temp}=props
    console.log(state)

    
    return(
        <div>
            {name.map(i=><li>{i}</li>)}
            <input type='text'value={state} onChange={(e)=>setState(e.target.value)}></input>
            <button onClick={()=>temp(state,setState(''))}>Add</button>
        </div>
    )
}

const mapStateToprops = (val)=>{
    return{
        name:val.data
    }
}
const mapDispatchprops = (dispatch)=>{
    return{
        temp:(val) => {dispatch({type:'ADD_NUM',payload:val})}
    }
}

export default connect(mapStateToprops,mapDispatchprops)(Header)