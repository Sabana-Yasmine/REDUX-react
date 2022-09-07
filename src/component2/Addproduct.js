import React, {useState} from "react"
import {useDispatch} from 'react-redux'
import {add} from "../features/Product"

function Add() {
    const dispatch = useDispatch()
    const [name, setName] = useState()
    const fun = (data) =>{
        console.log(data)
        setName(data)
    } 
    return(
        <div>
            <input type ="text" onChange={(data)=>fun(data.target.value)}/>
            <button onClick={()=> 
            dispatch(add({
                name : 'name',
                price : 10,
                quantity : 'safa@gmail.com'
            
            }))}>Add</button>
            </div>
    )
    
}

export default Add;