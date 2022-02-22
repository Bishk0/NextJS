import PostItem from './post-item';
import classes from './posts-grid.module.css';

const PostsGrid = (props) => {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostItem />
        </li>
      ))}
    </ul>
  );
};

export default PostsGrid;
