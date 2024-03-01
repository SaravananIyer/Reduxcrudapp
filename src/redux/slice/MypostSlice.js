import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMyPost = createAsyncThunk('fetchMyPost', async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/?userId=3')
    return response.json();
})

export const Createpost = createAsyncThunk('createPost', async (payload) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
});

export const Deletepost = createAsyncThunk('deletePost', async (payload) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${payload}`, {
    method: 'DELETE',

  });
  return payload; // Returning true if the deletion was successful
});

export const Updatepost = createAsyncThunk('updatePost', async (payload) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
});


const MypostSlice = createSlice({
  name: "Mypost",
  initialState: {
    isLoading: false,
    data: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMyPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchMyPost.rejected, (state) => {
        state.isLoading = false; // Handle loading state for rejection as well
        state.data = [];
        // Optionally handle error details here
      });
      builder.addCase(Deletepost.fulfilled, (state, action)=> {
        const newData = state.data.filter((element)=> element.id !== action.payload)
        state.data = newData
    });
  },
});

export default MypostSlice.reducer;