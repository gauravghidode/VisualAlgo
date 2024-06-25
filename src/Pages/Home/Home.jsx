import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-5xl font-bold">Welcome to VisionAlgo!</h1>
                        <p className="py-6">
                            Here you can visualize the working of various sorting algorithms. Just select the algorithm and click on sort, it will generate an random array and sort it.
                        </p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                        <NavLink className='btn btn-primary m-2' to='/bubblesort'>Bubble Sort</NavLink>
                        <NavLink className='btn btn-primary m-2' to='/mergesort'>Merge sort</NavLink>
                        <NavLink className='btn btn-primary m-2' to='/insertionsort'>Insertion Sort</NavLink>
                        {/* <NavLink className='btn btn-primary m-2' to='/selectionsort'>Selection Sort</NavLink> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home