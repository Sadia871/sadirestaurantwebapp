import React from 'react'
import Resturant from "./Components/basic/Resturant"


export default function App() {
  //TEST GITHUB
  console.log("test")
  return (
    <div>
      <div className='.stclass'>
      <h1 style={{ fontFamily:"initial",color:"Black",fontsize:"200px"}}>My 1st Project</h1>
      {/* <h1 style={{ fontFamily:"initial",color:"gray",fontsize:"200px"}}>What is best quote for restaurant?
Image result for restaurants short quotes
“A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food.” </h1> */}
      </div>
      <Resturant />
    </div>
  )
}



