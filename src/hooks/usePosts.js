import { useState, useEffect } from 'react';

const API_URL = 'https://cloud.codesupply.co/endpoint/react/data.json';

function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const query = searchQuery.trim().toLowerCase();
  const filtered = query
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.text.toLowerCase().includes(query),
      )
    : posts;

  return {
    posts: filtered,
    loading,
    error,
    searchQuery,
    setSearchQuery,
  };
}

export default usePosts;
