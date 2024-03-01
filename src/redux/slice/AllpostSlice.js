import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAllPost = createAsyncThunk('fetchAllPost', async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json();
})

const AllPostSlice = createSlice({
    name:'AllPost',
    initialState:{
        isloading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchAllPost.pending,(state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchAllPost.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchAllPost.rejected,(state,action)=>{
            console.log('Error',action.payload);
            state.isError = true;
        });
    },

    
})

export default AllPostSlice.reducer