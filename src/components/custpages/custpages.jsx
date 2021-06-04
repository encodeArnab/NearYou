import React, { useEffect } from "react";
import Ceil from "../../Assets/svgs/ceiling.svg";
import lgrass from "../../Assets/svgs/grassleft.svg";
import rgrass from "../../Assets/svgs/grassright.svg";
import Searchbar from "../searchBar/searchbar";
import Button from "../button/button";
import Custhome from '../custhome/custhome'
import ShopListing from '../shopListing/shopListing.jsx'


const arr = [
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
];



const custpages = () => {
    let [user,setUser] = React.useState("NearBuy");
    const [showHome, setShowHome] = React.useState(true);
    useEffect(()=>{
      let x = JSON.parse(window.localStorage.getItem('user'));
      if(x){
        console.log('here');
        setUser(x.user_name);
        console.log(user)
      }
    })

  return (
    <React.Fragment>
      <div className="ceil">
        <img src={Ceil} alt="" className="ceilsvg" />
        <Button type="button" value={user} />
        <Searchbar />
      </div>
      {showHome && <Custhome onClick={ () => setShowHome(false)}/>}
      {!showHome && <ShopListing arr = {arr} value = "Available Shops"/>}
      <div className="custgrasses">
        <img src={lgrass} alt="" />
        <img src={rgrass} alt="" />
      </div>
    </React.Fragment>
  );
};

export default custpages;
