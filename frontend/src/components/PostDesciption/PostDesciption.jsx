import React, { useContext, useState } from 'react'
import { BlogContext } from '../Context/Context';
import { useParams } from 'react-router-dom';


const PostDesciption = () => {

    const [postdes, setPostDes] = useState();
    const { blogs } = useContext(BlogContext);

    
    const { id } = useParams();

    const blog = blogs.find(blog => blog.id === parseInt(id));
    


  return (
    <div>PostDesciption
        <p>{blog.title}</p>
    </div>
  )
}

export default PostDesciption