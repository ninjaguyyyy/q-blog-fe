import PopularPostItem from 'app/posts/[slug]/components/PopularPostItem';
import styles from './index.module.scss';

export default function PopularPosts() {
  return (
    <div className={styles['popular-posts']}>
      <div>🎯 Popular Posts</div>
      <div>
        <hr className="my-4" />
        <PopularPostItem />
        <hr className="my-4" />
        <PopularPostItem />
        <hr className="my-4" />
        <PopularPostItem />
      </div>
    </div>
  );
}
