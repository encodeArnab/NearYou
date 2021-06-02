import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios'
import Input from "../input/input";
// import CustHome from '../custhome/custhome'
import ShopDashboard from '../shopdashboard/shopDashboard'

const reducer = (state, action) => {
  if (action.type === 'SET_TOKEN') {
    // console.log(action.payload)
    return {
      ...state,
      shopAuthToken: action.payload
    }
  }
}

const Login = () => {
  const [state, dispatch] = useReducer(reducer, {
    shopAuthToken: 'none',
  });

  const [shopInfo, setShopInfo] = useState({
    id: '',
    shop_name: '',
    shop_owner_name: '',
    shop_address: '',
    shop_type: '',
    shop_phone_number: '',
    shop_pincode: ''
  })

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [vals, setVals] = useState({
    shop_phone_number: "",
    shop_password: ""
  })

  const setValue = (name, value) => {
    setVals({
      ...vals,
      [name]: value
    })
  }

  useEffect(() => {
    if (state.shopAuthToken !== 'none') {
      // console.log(state.shopAuthToken);
      const url = 'http://localhost:5000/api/shops/dashboard';
      axios.get(url, {
        headers: {
          'Authorization': state.shopAuthToken
        }
      })
        .then(response => {
          if (response.data) {
            // console.log(response.data);
            const obj = response.data;
            setShopInfo({
              id: obj.id,
              shop_name: obj.shop_name,
              shop_owner_name: obj.shop_owner_name,
              shop_address: obj.shop_address,
              shop_type: obj.shop_type,
              shop_phone_number: obj.shop_phone_number,
              shop_pincode: obj.shop_pincode
            })
            setIsLoggedIn(true);
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [state])


  const submitHandler = (e) => {
    e.preventDefault();
    const url = 'http://localhost:5000/api/shops/login';
    axios.post(url, {
      shop_phone_number: vals.shop_phone_number,
      shop_password: vals.shop_password
    })
      .then(response => {
        setVals({
          shop_phone_number: "",
          shop_password: ""
        })
        if (response.data) {
          dispatch({ type: 'SET_TOKEN', payload: response.data.token });
        }
      })
      .catch(err => {
        console.log(err);
      })
  }


  if (!isLoggedIn) {
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
                  <button type="button" className="redbtn" onClick={() => { window.location.href = '/shop/register' }}>
                    Registration
                  </button>
                </div>
              </div>
            </form>
          </article>
        </div>
      </React.Fragment>
    );
  } else {
    return <ShopDashboard data={shopInfo}/>
  }

};

export default Login;
