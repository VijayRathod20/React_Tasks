import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostRoute() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [comments, setComments] = useState([]);
  const [numOfComments,setNumOfCommets] = useState(2);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, [userId]);

  const handleViewComments = (userId) => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?userId=${selectedPostId}&_limit=${numOfComments}`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    setSelectedPostId(userId);
   
  };
 const handleLoadMore = () => {
    setNumOfCommets(numOfComments + 2);
    axios.get(`https://jsonplaceholder.typicode.com/comments?userId=${selectedPostId}&_limit=${numOfComments}`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  
   
 }
  
  return (
    <div>
      <h1>Posts</h1>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
              <button onClick={() => handleViewComments(post.id)}>
                View Comments
              </button>
            </td>
            </tr>
            
          ))}
        </tbody>
        {selectedPostId && (
        <tfoot>
          <tr>
            <td colSpan="4">
              <h2>Comments of post  {selectedPostId}</h2>
              <ul>
                {comments.map(comment => (
                  <li key={comment.id}>
                    <p>{comment.name}</p>
                    <p>{comment.body}</p>
                    
                  </li>
                  
                ))}
                <button   onClick={()=>{handleLoadMore();}}>loadMore</button>
              </ul>
            </td>
          </tr>
        </tfoot>
      )}
      </table>
    </div>
  );
}

export default PostRoute;
