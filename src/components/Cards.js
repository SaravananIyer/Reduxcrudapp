import React from 'react';
import './Cards.css';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Deletepost } from "../redux/slice/MypostSlice"


const Cards = ({ data, isMypost }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDeletePost = () => {
    dispatch(Deletepost(data?.id))
}

const handleUpdate = () => {
    navigate('/create-update', {
        state: {
            data : data
        }
    })
}
  return (
    <Box className="data-card" border={1} borderColor="black" borderRadius={5} p={2}>
      <Box>
        <Typography className="data-card-title">{data?.title}</Typography>
        <Typography className="data-card-description" pt={2}>{data?.body}</Typography>
      </Box>
   
                {
                  isMypost && (
                      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                          <Button variant="outlined" onClick={handleUpdate}>Update</Button>
                          <Button variant="outlined" color="error" onClick={handleDeletePost}>Delete</Button>
                      </Box>    
                  )
              }
              </Box>
  );
};

export default Cards;
