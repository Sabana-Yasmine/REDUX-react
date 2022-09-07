
import { createSlice} from "@reduxjs/toolkit"

export const prodSlice =createSlice({
    name : "product",
    initialstate : {value:{
        name :'',
        price : '',
        quantity :''
    }},
    reducers : {
        add : (sate,action)=>{
            sate.vale = action.payload;
        }
    }
})

export const {add} = prodSlice.actions
export default prodSlice.reducer