import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar bg-base-300">
    <div className="flex-1">
        
      <NavLink to='/' className="btn btn-primary text-xl">Vision Algo</NavLink>
    </div>
    <div className="navbar-center hidden lg:flex">
                <ul className='menu menu-horizontal'>
                    <li><NavLink to='/bubblesort'>Bubble Sort</NavLink></li>
                    <li><NavLink to='/mergesort'>Merge sort</NavLink></li>
                    <li><NavLink to='/insertionsort'>Insertion Sort</NavLink></li>
                    {/* <li><NavLink to='/selectionsort'>Selection Sort</NavLink></li> */}
                </ul>
            </div>
  </div>
  )
}

export default Header