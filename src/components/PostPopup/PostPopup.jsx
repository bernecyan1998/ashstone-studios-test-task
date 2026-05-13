import { useEffect } from 'react';
import './PostPopup.css';

function PostPopup({ post, onClose }) {
  useEffect(() => {
    if (!post) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [post]);

  if (!post) return null;

  return (
    <div className="popup" onClick={onClose}>
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <button className="popup__close" onClick={onClose}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <img
          className="popup__image"
          src={post.img}
          srcSet={`${post.img_2x} 2x`}
          alt={post.title}
        />

        <div className="popup__body">
          <span className="popup__tag">{post.tags}</span>
          <h2 className="popup__title">{post.title}</h2>

          <div className="popup__meta">
            <span>{post.autor}</span>
            <span className="popup__separator">·</span>
            <span>{post.date}</span>
            <span className="popup__separator">·</span>
            <span>{post.views} Views</span>
          </div>

          <p className="popup__text">{post.text}</p>
        </div>
      </div>
    </div>
  );
}

export default PostPopup;
