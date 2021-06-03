import React from "react";
import Ceil from "../../Assets/svgs/ceiling.svg";
import lgrass from "../../Assets/svgs/grassleft.svg";
import rgrass from "../../Assets/svgs/grassright.svg";
import Button from "../button/button";
import ShopListing from "../shopListing/shopListing";
import AddProduct from "../addProduct/addProduct";
import OrderListing from "../orderListing/orderListing";
import './shopDashboard.css'

const ordArr = [
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
];
const arr = [
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
];

const ShopDashboard = ({ data }) => {
  return (
    <React.Fragment>
      <div className="ceil">
        <img src={Ceil} alt="" className="ceilsvg" />
        <Button type="button" value="NearYou" />
      </div>
      <OrderListing arr={ordArr} value="Orders Pending" />
      <section>
        <div>
          <ShopListing arr={arr} value="Items Left" />
        </div>
        <div>
          <AddProduct/>
        </div>
      </section>
      <div className="custgrasses">
        <img src={lgrass} alt="" />
        <img src={rgrass} alt="" />
      </div>
    </React.Fragment>
  );
};

export default ShopDashboard;
