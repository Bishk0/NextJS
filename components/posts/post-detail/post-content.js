import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';

const DUMMY_POST =  {
  slug: 'getting-started',
  title: 'Getting Started',
  image: 'getting-started.jpg',
  excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
  date: '2022-02-10',
  content: '# Lorem ipsum dolor sit amet consectetur adipisicing.'
};

const PostContent = (props) => {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
