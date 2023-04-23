import classes from './index.module.scss';
import Image from 'next/image';
import { Carousel } from 'antd';

const Hero = () => {
  let array = [1, 2, 3, 4];
  return (
    <section className={classes.hero}>
      <div className={classes.contentStyle}>
        <Carousel autoplay>
          {array.map((item) => {
            let imagePath = `/images/site/${item}.jpg`;
            return (
              <div key={item}>
                <Image src={imagePath} alt="An image showing owner" width={300} height={300} />
              </div>
            )
          })}
        </Carousel>
      </div>
      <h1>Hi, I am Tieu Long Nu</h1>
      <p>I write blog about my life in Than Dieu Dai Hiep</p>
    </section>
  );
};

export default Hero;