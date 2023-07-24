import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
    const location = useLocation()
    const path = location.pathname
  
    const style = path === '/active' ? 
    {transform: 'translateX(100%)'} : 
    path === '/done' ? 
    {transform: 'translateX(200%)'} :
    {transform: 'translateX(0)'}

  return (
    <div className='tabs'>
        <Link to={'/'}  className='nav-link'>
          <div className="tab">All</div>
        </Link>
        <Link to={'/active'} className='nav-link'>
          <div className="tab">In Progress</div>
        </Link>
        <Link to={'/done'} className='nav-link'>
          <div className="tab">Done</div>
        </Link>
        <span className='cover' style={style}></span>
      </div>
  )
}

export default Nav