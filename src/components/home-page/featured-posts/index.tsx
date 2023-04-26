import { Post } from '../../../models/post';
import PostsGrid from '../../posts-grid';
import classes from './index.module.css';

type FeaturedPostsProps = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section className={classes.latest}>
      <h2 className="!text-red-500">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
