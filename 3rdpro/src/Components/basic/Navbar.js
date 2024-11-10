import React from 'react'

const Navbar = ({ filterItem, menuList } ) => {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
          {
            menuList.map((CurElem) => {
              return (
                <button className='btn-group__item' onClick={() => filterItem(CurElem)}>
                  {CurElem}
                </button>

              )
            })
          }

          {/* <button className='btn-group__item' onClick={() => filterItem("Lunch")}>Lunch </button>
          <button className='btn-group__item' onClick={() => filterItem("Evening")}>Evening</button>
          <button className='btn-group__item' onClick={() => filterItem("Dinner")}>Dinner</button>
          <button className='btn-group__item' onClick={()=>setMenuData(Menu)}>All</button> */}

        </div>
      </nav>
    </>
  )
}

export default Navbar
