import React, { useEffect, useState } from 'react'
import './Sorting.css'
import { getMergeSortAnimations } from '../../Algorithms/mergesort';
import { getInsertionSortAnimation } from '../../Algorithms/insertionsort';

const PRIMARY_COLOR = "lightskyblue";
const SECONDARY_COLOR = "red";
const LENGTH = 40;
const TIME = 50;

const Sorting = () => {

    const [arr, setArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [disabe, setDisabe] = useState(false);
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
    }

    async function mergeSortStarter() {
        setDisabe(true);
        const arr1 = []
        for (let i = 0; i < arr.length; i++) {
            arr1.push(arr[i]);
        }
        const animations = await getMergeSortAnimations(arr1);

        for (let i = 0; i < animations.length; i++) {
            const [idx1, idx2, k, action] = animations[i];

            if (action === 'destroy') {
                //attach class
                document.getElementById("temp-array").classList.add('move-up');
                setTimeout(() => {
                    
                    for (let j = idx1; j < idx2; j++) {
                        console.log(idx2);

                        document.getElementById(j).style.height = document.getElementById(-j).style.height;
                        document.getElementById(-j).style.height = 0;

                    }
                    
                }, i * TIME);
                
            }
            else if (action === 'create') {
                setTimeout(() => {
                    document.getElementById('temp-array').classList.remove('move-up');
                }, TIME*i);
            }
            if (action === 'height') {
                setTimeout(() => {
                    document.getElementById(-idx1).style.height = `${idx2 / 4}px`;
                }, TIME * i);

            }
            else {
                if (action === 'primary') {

                    setTimeout(() => {
                        document.getElementById(idx1).style.backgroundColor = PRIMARY_COLOR;
                        document.getElementById(idx2).style.backgroundColor = PRIMARY_COLOR;
                    }, TIME * i);
                }
                else if (action === 'secondary') {

                    setTimeout(() => {
                        document.getElementById(idx1).style.backgroundColor = SECONDARY_COLOR;
                        document.getElementById(idx2).style.backgroundColor = SECONDARY_COLOR;
                    }, TIME * i);
                }
            }

        }
    }




    useEffect(() => {
        resetArr();
    }, []);

    return (
        <div>{
            !loading &&
            <>
                <h1 className='text-2xl p-2'>Merge <button disabled={disabe} onClick={mergeSortStarter} className='btn btn-primary btn-md m-2'>Sort</button> <button onClick={()=>window.location.reload()} className='btn btn-accent btn-md'>Refresh</button></h1>
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
                <h3>Auxilliary <br /> Array</h3>
                <div className="arr-container" id='temp-array'>
                    {
                        auxArr?.map((element, index) => (
                            <div className='arr-bar' id={-index} key={index} style={{ backgroundColor: PRIMARY_COLOR, height: `${element / 4}px` }}>
                                {/* {element} */}
                            </div>
                        ))
                    }
                </div>
                {/* <button className='sort-btn' onClick={mergeSortStarter}>Sort</button> */}
            </>
        }
        </div>
    )
}

export default Sorting