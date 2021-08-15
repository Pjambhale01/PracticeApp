import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Header from '../Redux/Header'
import reducer from '../Redux/reducer.'
const Home=(props)=>{
    
    const list = {
        data:["one","two","three","foure"],
    }

    const intial = createStore(reducer,list)

    return(
        <div>
            <Provider store={intial}>
              <Header/>
            </Provider>
        </div>
    )
}
export default Home