import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch posts when component mounts
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/posts/');
//         console.log('Posts data:', response.data);
//         setPosts(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching posts:', err);
//         setError('Error fetching posts');
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="App">
//       <header>
//         <h1>My Blog Posts</h1>
//       </header>
//       <div className="posts-container">
//         {posts.map(post => (
//           <div key={post.id} className="post-card">
//             <h2>{post.title}</h2>
//             <p>{post.content}</p>
//             <div className="post-info">
//               <p>Author: {post.author ? post.author : 'Anonymous'}</p>
//               <p>Created: {new Date(post.created_at).toLocaleDateString()}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
