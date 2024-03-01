import { configureStore } from "@reduxjs/toolkit";
import AllpostSlice from "./slice/AllpostSlice";
import MypostSlice from "./slice/MypostSlice";

export const store = configureStore({
    reducer:{
        Allpost:AllpostSlice,
        Mypost: MypostSlice
    }
});

