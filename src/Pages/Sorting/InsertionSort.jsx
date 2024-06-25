import React, { useEffect, useState } from 'react'
import './Sorting.css'
import { getMergeSortAnimations } from '../../Algorithms/mergesort';
import { getInsertionSortAnimation } from '../../Algorithms/insertionsort';

const PRIMARY_COLOR = "lightskyblue";
const SECONDARY_COLOR = "red";
const LENGTH = 30;
const TIME = 80;

const Sorting = () => {

    const [arr, setArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [disable, setDisable] = useState(false);
    const [auxArr, setAuxArr] = useState(Array(LENGTH).fill(0));

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
        setDisable(false);
    }


    function insertionSort(){
        setDisable(true);
        const arr1 = arr.slice();
        const animations  = getInsertionSortAnimation(arr1);
        console.log(animations);
        for(let i=0;i<animations.length;i++){
            setTimeout(() => {
                const [idx1, idx2, action] = animations[i];
                if(action==='primary'){
                    document.getElementById(idx1).style.backgroundColor = PRIMARY_COLOR;
                    document.getElementById(idx2).style.backgroundColor = PRIMARY_COLOR;
                }
                else if(action==='secondary'){
                    document.getElementById(idx1).style.backgroundColor = SECONDARY_COLOR;
                    document.getElementById(idx2).style.backgroundColor = SECONDARY_COLOR;
                }
                else if(action==='ternary'){
                    document.getElementById(idx1).style.backgroundColor = "green";
                    document.getElementById(idx2).style.backgroundColor = 'green';
                }
                else if(action==='out'){
                    document.getElementById(-idx1).style.height = document.getElementById(idx1)?.style.height;
                    document.getElementById(idx1).style.height = '0px';
                }
                else if(action==='in'){
                    document.getElementById(idx2).style.height = document.getElementById(-idx1)?.style.height;
                    document.getElementById(-idx1).style.height = '0px';
                }
                else if(action==='move'){
                    // document.getElementById(-idx1).style.height = document.getElementById(-idx2).style.height;
                    // document.getElementById(-idx2).style.height = '0px';
                    document.getElementById(idx2).style.height = document.getElementById(idx1)?.style.height;
                    document.getElementById(idx1).style.height = '0px';
                }
            }, TIME*i);
        }
    }


    useEffect(() => {
        resetArr();
    }, []);

    return (
        <div>{
            !loading &&
            <>
                <h1 className='text-2xl p-2'>Insertion <button onClick={insertionSort} disabled={disable} className='btn btn-primary btn-md m-2'>Sort</button> <button onClick={()=>window.location.reload()} className='btn btn-accent btn-md'>Refresh</button></h1>

                <h3>Main <br /> Array</h3>
                <div className="arr-container">
                    {
                        arr?.map((element, index) => (
                            <div className='arr-bar' id={index} key={index} style={{ backgroundColor: PRIMARY_COLOR, height: `${element / 4}px` }}>
                                {/* {element} */}
                            </div>
                        ))
                    }
                </div>
                <h3>Extra <br />Space</h3>
                <div className="arr-container" id='temp-array'>
                    {
                        auxArr?.map((element, index) => (
                            <div className='arr-bar' id={-index} key={index} style={{ backgroundColor: PRIMARY_COLOR, height: `${element / 4}px` }}>
                                {/* {element} */}
                            </div>
                        ))
                    }
                </div>
                <button className='sort-btn' onClick={insertionSort}>Sort</button>
            </>
        }
        </div>
    )
}

export default Sorting