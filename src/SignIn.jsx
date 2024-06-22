import React, { useContext } from 'react';
import { AUthContext } from './assets/Providere/AuthProvider';
import { stringify } from 'postcss';


const SignIn = () => {

    const {createUser} = useContext(AUthContext)

    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        console.log(email, password);

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            ///Add data on server site
            const createdAt = result.user?.metadata?.creationTime;
            const user = {email, createdAt : createdAt};
            fetch('http://localhost:5001/user', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    alert('Add user on server')
                }
                console.log(data);
            })
        })
        .catch(error => {
            console.error(error)
        })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;