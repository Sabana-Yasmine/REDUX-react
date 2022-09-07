
import { createSlice} from "@reduxjs/toolkit"

export const prodSlice =createSlice({
    name : "prod",
    initialstate : {value:{
        name :'',
        price : '',
        quantity :''
    }},
    reducers : {
        add : (state,action)=>{
            state.vale = action.payload;
        }
    }
})

export const {add} = prodSlice.actions
export default prodSlice.reducer