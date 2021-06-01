import React, { useState } from "react";
import axios from 'axios'
import Input from "../input/input";


const Login = () => {
    
  const [vals,setVals] = useState({
      shop_phone_number:"",
      shop_password:""
  })  
    
  const setValue = (name,value)=>{
      setVals({
          ...vals,
          [name]: value
      })
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    const url = 'http://localhost:5000/api/shops/login';
    axios.post(url,{
      shop_phone_number: vals.shop_phone_number,
      shop_password: vals.shop_password
    })
      .then(response=>{
          setVals({
            shop_phone_number:"",
            shop_password:""
          })
          console.log(response)
          // if(response.data){

          // }
      })
      .catch(err=>{
        console.log(err);
      })
  }

  return (
    <React.Fragment>
      <div className="authBody">
        <article>
          <h1 className="shopregh">Shop Login</h1>
          <form className="authform" onSubmit={submitHandler}>
            <div>
              <div className="authflex">
              <Input
                hfor="shop_phone_number"
                type="tel"
                label="Phone Number"
                value={vals.shop_phone_number}
                setValue={setValue}
              />
              </div>
              <div className="authflex">
              <Input
                hfor="shop_password"
                type="password"
                label="Password"
                value={vals.shop_password}
                setValue={setValue}
              />
              </div>

              <div className="authflex">
                <button className="yelbtn" type="submit">
                  Login
                </button>
                <button type="button" className="redbtn" onClick={()=>{window.location.href='/shop/register'}}>
                  Registration
                </button>
              </div>
            </div>
          </form>
        </article>
      </div>
    </React.Fragment>
  );
};

export default Login;
