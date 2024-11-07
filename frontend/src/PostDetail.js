import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/posts/${id}/detail/`);
        console.log(response.data)
        setPost(response.data.post);
        setComments(response.data.comments);
        setLoading(false);
      } catch (err) {
        console.log(response.err)
        setError('Error fetching post details');
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Created: {new Date(post.created_at).toLocaleDateString()}</p>
      
      <h2>Comments</h2>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul className="comments-list">
          {comments.map(comment => (
            <li key={comment.id} className="comment">
              <p>{comment.content}</p>
              <p>By: {comment.author}</p>
              <p>On: {new Date(comment.created_at).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostDetail;