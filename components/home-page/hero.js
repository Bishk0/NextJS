import Image from 'next/image';
import classes from './hero.module.css';

const Hero = (props) => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/img.jpg" alt="An image showing Bishko" width={400} height={400} />
      </div>
      <h1>Hi, I&apos;m a Bishko!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        inventore quisquam ipsum earum magnam nobis!
      </p>
    </section>
  );
};

export default Hero;
