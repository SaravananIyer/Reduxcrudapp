import React, { useEffect } from "react";
import "./Cards";
import Cards from "./Cards";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPost } from '../redux/slice/AllpostSlice';
import { Box } from "@mui/material";
import './Allposts.css'

const Allposts = () => {
  const dispatch = useDispatch();
  const allpost = useSelector((state) => state?.Allpost);

  useEffect(() => {
    dispatch(fetchAllPost());
  }, []);

  return (
    <div>
      <Navbar />
      {allpost?.isLoading ? (
        <Box>Loading</Box>
      ) : (
        allpost?.data?.length ? (
          <Box className="card-grid">
            {allpost?.data?.map((data, index) => (
              <Cards data={data} key={index} />
            ))}
          </Box>
        ) : <Box>No data</Box>
      )}
    </div>
  );
};

export default Allposts;
