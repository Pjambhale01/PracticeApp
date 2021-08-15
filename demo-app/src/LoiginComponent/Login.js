import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import "./Login.css"

export default function FormValidations(props) {

    const { register,errors,handleSubmit} = useForm()

    const onSubmission = val=>{
        // e.preventDefault()
        console.log(val)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmission)}>
                <div>
                    <label>First name:</label>
                    <span><input type='text' name='fname'  /></span> 
                    {/* {errors.fname && (
                        <span style={{color:'red'}}>{errors.fname.message}</span>
                    )} */}
                </div>
                {/* <div>
                    <label>Last name:</label>
                    <span><input type='text' name='fname' /></span>
                </div> */}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}



// const Login = () => {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")


//     return (
//         <div className="login">
//             <form className="login_form">
//                 <h1>Login here</h1>
//                 <input type="name"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <input type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)} 
//                 />
//                 <button type="submit">Submit</button>
//             </form>

//         </div>
//     )
// }
// export default Login

