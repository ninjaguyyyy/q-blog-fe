import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import getBlogs from './api/list-blog/api/getBlogs';

const Home: NextPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
        console.log(data);
      } catch (error) {
        console.log('error fetching blog', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <FeaturedPosts posts={blogs} />
    </>
  );
};

export default Home;
