import React, { useState } from 'react'
import "./Navigation.css"

const Navigation = () => {
    const [clicked, setClicked] = useState(false);

      const handleClick = () =>{
            setClicked (!clicked);
    }
  return (
    <div> 
        <nav>
            <div style={{display:"flex"}}>
                <img src='assets/logooo.png' alt='logo'  width='40' />
                <h3 style={{paddingLeft:'10px', color:'white'}}>Halogen Group</h3>
            </div>
            <div>
                <ul id='navbar' className={clicked=== true ?'#navbar active' : '#navbar'}>
                    <li><a className='HOMe' href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">All Halogen</a></li>
                    <li><a href="#">Media Center</a></li>
                    <li><a href="#">Enter Halospere</a></li>
                </ul>
            </div>
            <div className='mobile'>
                <i  onClick={handleClick} id="bar" className={clicked===true ? 'fas fa-times' : 'fas fa-bars'}> </i>
            </div>
        </nav>
    </div>
  )
}

export default Navigation