import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

const DUMMY_POSTS = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    image: 'getting-started.jpg',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started2',
    title: 'Getting Started2',
    image: 'getting-started.jpg',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    date: '2021-02-10'
  },
  {
    slug: 'getting-started3',
    title: 'Getting Started3',
    image: 'getting-started.jpg',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    date: '2022-03-10'
  }
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
