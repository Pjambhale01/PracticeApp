import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            billAmount:0,
            service:0,
            custName:'',
            custDetails:[]
        }    
    }
    handleclick = ()=>{
        this.setState({
            custDetails:[...this.state.custDetails,{name:this.state.custName}]
        })
    }
    render(){
        return(
            <div>
                <div>
                   <input type="text"value={this.state.billAmount} onChange={e=>this.setState({billAmount : e .target.value})}></input>
                </div>
                <div>
                    How was the service
                    <select value={this.state.service} onChange={e => this.setState({service:e.target.value})}>
                        <option>chooes...</option>
                        <option value="0.20">Excelent</option>
                        <option value="0.10">good</option>
                        <option value="0.5">not good</option>
                    </select>
                </div>
                <div>
                    Enter the customer name:
                    <input type="text" value={this.state.custName} onChange={e=>this.setState({custName:e.target.value})}></input>
                    <button onClick={()=>this.handleclick()}>addd</button>
                </div>
                <div>{this.state.billAmount * this.state.service}</div>
                <div>{this.state.custDetails.map(i=>i.name)}</div>
            </div>
        )
    }
}

export default Input