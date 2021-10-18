import React from 'react';
import UseAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = UseAuth();
    return (
        <div>
           <h2 className="text-danger"> Please Login </h2> <br />
           <button onClick={signInUsingGoogle} className="btn btn-danger mb-5">Google Sign in</button>
        </div>
    );
};

export default Login;