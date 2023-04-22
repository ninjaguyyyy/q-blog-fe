import classes from './index.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { text } from 'stream/consumers';

const maxIndexImage = 4;

const Hero = () => {
  const [index, setIndex] = useState(1);
  let imagePath = `/images/site/${index}.jpg`;
  return (
    <section className={classes.hero}>
      <div className={classes.contentStyle}>
        <div className={classes.contentStyle}>
          <Image src={imagePath} alt="An image showing owner" width={300} height={300} />
        </div>

      </div>
      <button

        disabled={index === 1}
        onClick={() => {
          setIndex(index - 1);
        }}>Back</button>
      <span>{index}/{maxIndexImage}</span>
      <button
        disabled={index === maxIndexImage}
        onClick={() => {
          setIndex(index + 1);
        }}>Next</button>


      <h1>Hi, I am Tieu Long Nu</h1>
      <p>I write blog about my life in Than Dieu Dai Hiep</p>
    </section>
  );
};

export default Hero;
