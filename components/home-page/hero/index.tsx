import classes from './index.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/q.jpg" alt="An image showing owner" width={300} height={300} />
      </div>
      <h1>Hi, I am Tieu Long Nu</h1>
      <p>I write blog about my life in Than Dieu Dai Hiep</p>
    </section>
  );
};

export default Hero;
