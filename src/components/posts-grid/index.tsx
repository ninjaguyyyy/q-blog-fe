import React from 'react';
import PostItem from './post-item';
import classes from './index.module.css';
import { Post } from '../../models/post';

type PostsGridProps = {
  posts: Post[];
};

const PostsGrid = ({ posts }: PostsGridProps) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
