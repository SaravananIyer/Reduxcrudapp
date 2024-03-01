import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Updatepost } from '../redux/slice/MypostSlice';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const navigate = useNavigate();
    const [initialTitle, setInitialTitle] = useState('');
    const [initialDescription, setInitialDescription] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (location?.state?.data) {
            const { title, body } = location?.state?.data;
            setTitle(title);
            setInitialTitle(title);
            setDescription(body);
            setInitialDescription(body);
            setIsUpdate(true);
        }
    }, [location]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleUpdate = () => {
        const payload = {
            ...location?.state?.data,
            title: title,
            body: description,
        };
        dispatch(Updatepost(payload));
        navigate('/myposts');
    };

    // Check if there are changes in the title or description fields
    const isDataChanged = title !== initialTitle || description !== initialDescription;

    return (
        <div>
            <Navbar />
            <Box className="create-post" style={{ maxWidth: '400px', margin: 'auto' }}>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={title}
                    onChange={handleTitleChange}
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    margin="normal"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '16px' }}
                    onClick={handleUpdate}
                    disabled={!isDataChanged} // Disable button if there are no changes
                >
                    Update
                </Button>
            </Box>
        </div>
    );
};

export default CreatePost;
