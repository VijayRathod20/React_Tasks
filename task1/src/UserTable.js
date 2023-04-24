import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function UserTable() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  

  function handleUserSelect(user) {
    setSelectedUserId(user.id);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>View post</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            
            <td>
            <td><Link to={`/posts/${user.id}`} onClick={() => handleUserSelect(user)}>View Posts</Link></td>

            </td>

          </tr>
        ))}
      </tbody>
      
    </table>
  );
}

// function UserTable() {
//     const [users, setUsers] = useState([]);
//     const [selectedUserId, setSelectedUserId] = useState(null);
//     const [comments, setComments] = useState([]);
//     const [numCommentsDisplayed, setNumCommentsDisplayed] = useState(2);
  
//     useEffect(() => {
//       axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//           setUsers(response.data);
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     }, []);
  
//     const handleLoadMore = () => {
//       setNumCommentsDisplayed(numCommentsDisplayed + 2);
//     };
//     const handleViewComments = (userId) => {
//       axios.get(`https://jsonplaceholder.typicode.com/comments?userId=${userId}&_limit=${numCommentsDisplayed}`)
//         .then(response => {
//           setComments(response.data);
//         })
//         .catch(error => {
//           console.log(error);
//         });
//       setSelectedUserId(userId);
//     };
  
   
  
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>View Comments</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>
//                 <button onClick={() => handleViewComments(user.id)}>
//                   View Comments
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         {selectedUserId && (
//           <tfoot>
//             <tr>
//               <td colSpan="4">
//                 <h2>Comments by User {selectedUserId}</h2>
//                 <ul>
//                   {comments.map(comment => (
//                     <li key={comment.id}>
//                       <p>{comment.name}</p>
//                       <p>{comment.body}</p>
//                     </li>
//                   ))}
//                 </ul>
//                 {comments.length >= numCommentsDisplayed && (
//                   <button onClick={handleLoadMore}>
//                     Load More Comments
//                   </button>
//                 )}
//               </td>
//             </tr>
//           </tfoot>
//         )}
//       </table>
//     );
//   }
  
export default UserTable;
