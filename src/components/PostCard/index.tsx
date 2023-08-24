import { Card } from 'antd';
import Link from 'next/link';
import styles from './index.module.scss';
import Image from 'next/image';
import Avatar from 'statics/images/avatar.jpg';
import { Post } from 'models/Post';
import { ROUTE } from 'constants/route';

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  const { title, image, slug } = post;
  return (
    <Card
      className={styles['post-card']}
      style={{ width: 300, height: 320 }}
      cover={
        <Image
          alt="post-img"
          src={image}
          width={300}
          height={230}
          className="h-[230px]"
        />
      }
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={Avatar}
              alt="avatar"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="block ml-2 text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
              Chi Nguyen
            </span>
          </div>
          <span className="float-right text-neutral-500 dark:text-neutral-400 font-normal">
            May 20, 2023
          </span>
        </div>
        <h2 className="text-neutral-900 dark:text-neutral-100 font-semibold text-lg mt-1">
          <Link href={`${ROUTE.POSTS}/${slug}`}>{title}</Link>
        </h2>
      </div>
    </Card>
  );
}
