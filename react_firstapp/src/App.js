
import React from "react";
import Description from "./component/Description";
const app = () => {
    const iphoneList = [ "Iphone 14", "Iphone14 pro ","Iphone14 pro max"]
    const laptopList = [ "Lenovo","Dell","Mitsubishi"]

   
return (
  <div>
    <h1>Welcome to our online store</h1>
   
    <Description name= "iphone collection" 
    details= "Best iphone models" 
    review="⭐️⭐️⭐️⭐️⭐️" 
    price="1000$" 
    list = {iphoneList}/>

    <Description name= "Laptop" 
    details= "Best window laptop" 
    review="⭐️⭐️⭐️⭐️⭐️" 
    price="1000$" 
    list = {laptopList}/>
    
  </div>
); 
};

 export default app;
 