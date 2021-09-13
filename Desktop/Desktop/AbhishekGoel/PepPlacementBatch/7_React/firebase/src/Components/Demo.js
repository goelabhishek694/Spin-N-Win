import React, { useState, useEffect } from 'react'
import firebase from './firebase'

function Demo() {
    const auth = firebase.auth();
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit=async()=>{
        try{
            console.log(email,password);
            let res=await auth.signInWithEmailAndPassword(email,password);
            console.log(res);
            setUser(res.user);
            setLoading(false);
        }
        catch(e){
            setError(e.message);
        }
    }

    return (
        <>
            {loading ? <h1>Please wait.... loading</h1> : user == null ?
                <div>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                    </label>
                    <button onClick={handleSubmit}>Log in</button>
                    {error ? <h1>{error}</h1> : <></>}
                </div>:

                <div>
                <h2>{user.uid} is Signed in</h2>
                <button onClick={handelSignOut}>Sign Out</button>
                </div>
                
            }
        
        </>
    )
}

export default Demo
