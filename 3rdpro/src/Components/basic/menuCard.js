import React, { useState, useEffect } from 'react'
import Resturant from './Resturant'
import "./style.css"
//import img1 from "../../images/1st.jpg"


const MenuCard = ({ menuData }) => {

    const [menu, setmenu] = useState([])

    useEffect(() => {
        setmenu(menuData)
    }, [])

    console.log(menu)
    return (
        <div className='cardsWrapper'>
            {menuData.map((CurElem) => {
                const { id, name, category, image, description } = CurElem
                return (
              <div style={{ flex: "48%", }}>
            <div className='card-container' key={id} >
            <div className='card'>
            <div className='card-body'>
            <span className='card-number '>{id}</span>
            <span className='card-author subtle' >
            {" "}{category}</span>
            <h2 className='card-title'>{name}</h2>
           <span className='card-discription subtle'> {description}</span>
            <div className='card-read'>Read</div>
        <img src={CurElem.image} alt='images' className='card-media' />
       <span className='card-tag subtle'> Order Now</span>
         </div>
          </div>
        </div>
        </div>
                )
            })}
        </div>
    )
}

export default MenuCard 
