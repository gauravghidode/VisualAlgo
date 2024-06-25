import React from 'react'
import { useState } from 'react';
import './BubbleSort.css'
import { getbubbleSortAnimation } from '../../Algorithms/bubblesort';

const LENGTH = 50;

const PRIMARY_COLOR = "skyblue";
const SECONDARY_COLOR = 'red';
const FINAL_COLOR = 'purple';
const TIME = 5;

const BubbleSort = () => {

    const [arr, setArr] = useState([]);
    const [loading, setLoading] = useState(true);

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    function resetArr() {
        const temp = [];
        for (let i = 0; i < LENGTH; i++) {
            temp.push(randomIntFromInterval(0, 1000));

        }
        setArr(temp);
        setLoading(false);
    }

    function BubbleSort() {
        setLoading(true);
        const arr1 = arr.slice();
        const animations = getbubbleSortAnimation(arr1);

        for (let i = 0; i < animations?.length; i++) {
            setTimeout(() => {
                const [idx1, idx2, action] = animations[i];
                if (action === 'primary') {
                    document.getElementById(idx1).style.backgroundColor = PRIMARY_COLOR;
                    document.getElementById(idx2).style.backgroundColor = PRIMARY_COLOR;
                }
                else if (action === 'secondary') {
                    document.getElementById(idx1).style.backgroundColor = SECONDARY_COLOR;
                    document.getElementById(idx2).style.backgroundColor = SECONDARY_COLOR;
                }
                else if (action === 'swap') {
                    let temp = document.getElementById(idx1).style.height;
                    document.getElementById(idx1).style.height = document.getElementById(idx2).style.height;
                    document.getElementById(idx2).style.height = temp;
                }
                else{
                    document.getElementById(idx1).style.backgroundColor= FINAL_COLOR;
                }
            }, i*TIME);
        }
    }


    useState(() => {
        resetArr();
    })

    return (
        <>
            <h1 className='text-3xl p-2'>Bubble<button onClick={BubbleSort} disabled={loading} className='btn btn-primary btn-md m-2'>Sort</button> <button onClick={()=>window.location.reload()} className='btn btn-accent'>Refresh</button></h1>
            <div className="arr-container">
                {
                    arr?.map((element, index) => (
                        <div className='arr-bar' id={index} key={index} style={{ backgroundColor: PRIMARY_COLOR, height: `${element / 3}px` }}>
                            {/* {element} */}
                        </div>
                    ))
                }
            </div>
            {/* <button onClick={BubbleSort}>Bubble Sort</button> */}
        </>
    )
}

export default BubbleSort