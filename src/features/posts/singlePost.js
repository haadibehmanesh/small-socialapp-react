import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { PostAuthor } from './postAuthor';
import { TimeAgo } from './timeAgo';

const SinglePost = () => {
  const { postId } = useParams();
  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>

      </article>
    </section>
  )
}
export default SinglePost;