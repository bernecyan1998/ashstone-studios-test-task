import './PostCard.css';

function PostCard({ post, onClick }) {
  return (
    <article className="post-card" onClick={() => onClick(post)}>
      <img
        className="post-card__image"
        src={post.img}
        srcSet={`${post.img_2x} 2x`}
        alt={post.title}
        loading="lazy"
      />

      <div className="post-card__content">
        <span className="post-card__tag">{post.tags}</span>

        <h2 className="post-card__title">{post.title}</h2>

        <div className="post-card__meta">
          <span className="post-card__author">{post.autor}</span>
          <span className="post-card__separator">·</span>
          <span className="post-card__date">{post.date}</span>
          <span className="post-card__separator">·</span>
          <span className="post-card__views">{post.views} Views</span>
        </div>

        <p className="post-card__text">{post.text}</p>
      </div>
    </article>
  );
}

export default PostCard;
