import PostCard from '../PostCard/PostCard';
import './PostList.css';

function PostList({ posts, onPostClick }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="post-list__empty">
        <p>No posts found.</p>
      </div>
    );
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} onClick={onPostClick} />
      ))}
    </div>
  );
}

export default PostList;
