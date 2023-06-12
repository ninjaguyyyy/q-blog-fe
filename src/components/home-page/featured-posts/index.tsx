import { Post } from '../../../models/post';
import PostsGrid from '../../posts-grid';
import classes from './index.module.scss';

type FeaturedPostsProps = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section className={classes.latest}>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
