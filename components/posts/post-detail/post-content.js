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
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
