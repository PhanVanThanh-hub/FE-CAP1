import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Post from './Post';
import axios from 'axios';

 
export default function ListPost( ) {
    const [listPost, setListPost] = useState([]);
    console.log(listPost)
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/post/')
            .then(res => setListPost(res.data))
            .catch(error => console.log(error))
    },[])
    
  return (
      <div>
      {
         listPost.map((postData: { id: any; image: any; author: any; create_at:any; num_comment:any}) => { 
             return (
             <Post key={postData.id} postData={postData}/>)
         })
      }
 </div>
  )
}
