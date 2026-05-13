import { useState } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MobileMenu from './components/MobileMenu/MobileMenu';
import PostList from './components/PostList/PostList';
import PostPopup from './components/PostPopup/PostPopup';
import usePosts from './hooks/usePosts';
import './App.css';

function App() {
  const { posts, loading, error, searchQuery, setSearchQuery } = usePosts();
  const [selectedPost, setSelectedPost] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handlePostClick(post) {
    setSelectedPost(post);
  }

  function handleClosePopup() {
    setSelectedPost(null);
  }

  function handleMenuToggle() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  function handleMenuClose() {
    setIsMobileMenuOpen(false);
  }

  return (
    <div className="app">
      <Header
        onMenuToggle={handleMenuToggle}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <Navigation />

      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMenuClose} />

      <main className="app__content">
        {loading && (
          <div className="app__loading">
            <p>Loading posts...</p>
          </div>
        )}

        {error && (
          <div className="app__error">
            <p>Failed to load posts: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <PostList posts={posts} onPostClick={handlePostClick} />
        )}
      </main>

      <PostPopup post={selectedPost} onClose={handleClosePopup} />
    </div>
  );
}

export default App;
