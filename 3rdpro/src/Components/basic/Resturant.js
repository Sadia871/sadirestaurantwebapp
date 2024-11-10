import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi.js'
import MenuCard from './menuCard'
import Navbar from './Navbar'
  
const uniqueList =[
  ...new Set(Menu.map((CurElem)=> {
      return CurElem.category
    })
  )
  ,"All",
]
// console.log(uniqueList)
const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu) 
  const[menuList, setMenuList]= useState(uniqueList)

  //console.log(menuData) ;  const filterItem = (category)=>{

    const filterItem = (category) => {

      if (category === "All") {
        setMenuData(Menu);
        return;
      }
      // console.log(category)

  const updatedList = Menu.filter((CurElem)=>{
    // console.log(CurElem.category === category)
  
  return CurElem.category === category;
  })
  // console.log(updatedList)
  setMenuData(updatedList);
  }

  return (
    <>

        <div >
        <Navbar filterItem ={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData} />

        {/* <MenuCard /> */}
      </div>
      {/* <menuCard /> */}
    </>
  )
}
export default Resturant
