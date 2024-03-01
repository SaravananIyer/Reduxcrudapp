import React, { useEffect } from "react";
import Cards from "./Cards";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import "./Allposts.css";
import { fetchMyPost } from "../redux/slice/MypostSlice";

const Mypost = () => {
  const mypost = useSelector((state) => state?.Mypost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyPost());
  }, []);

  return (
    <div>
      <Navbar />
      {mypost?.isLoading ? (
        <Box>Loading</Box>
      ) : mypost?.data?.length ? (
        <Box className="card-grid">
          {mypost?.data.map((data, index) => {
            return <Cards data={data} key={index} isMypost={true} />;
          })}
        </Box>
      ) : (
        <Box>No data</Box>
      )}
    </div>
  );
};

export default Mypost;
