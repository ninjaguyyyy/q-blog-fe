import { NextPage } from 'next';
import classes from './hero.module.css';
import Image from 'next/image';

const Hero: NextPage = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/q.jpg"
          alt="An image showing owner"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Max</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
};

export default Hero;
