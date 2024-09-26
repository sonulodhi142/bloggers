import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const BlogContext = createContext();

const ContextProvider = ({ children }) => {
    const apiUrl = "http://127.0.0.1:8000/blogs/";

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);  

    const fetchApi = async () => {
        try {

            const res = await axios.get(apiUrl);
            setBlogs(res.data);

        } catch (err) {

            setError('Failed to fetch blogs');
            console.error("Error fetching blogs:", err);

        } finally {

            setLoading(false);

        }
    };
    

    useEffect(() => {

        fetchApi();

    }, []);

    

    return (
        <BlogContext.Provider value={{ blogs,setBlogs, loading, error, fetchApi }}>

            {children}
            
        </BlogContext.Provider>
    );
};

export default ContextProvider;
