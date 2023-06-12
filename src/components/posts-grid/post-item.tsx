import classes from './post-item.module.scss';
import { CommentOutlined, ShareAltOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Avatar, Card, Button } from 'antd';
import { useState } from 'react';

const { Meta } = Card;

type PostItemProps = {
  post: {
    user: string;
    comment: string;
    heart: string;
    title: string;
    image: string;
    excerpt: string;
    date: string;
    imageTitle: string;
    id: number;
  };
};

const PostItem = ({ post }: PostItemProps) => {
  const { user, comment, heart, title, image, excerpt, date, id, imageTitle } = post;

  const [hearticon, setHearticon] = useState(false);
  const handle = () => {
    setHearticon(!hearticon);
  };

  const formattedDate = new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
 console.log('date', formattedDate)
  const imagePath = `${image}`;
  const imagePath2 = `${imageTitle}`;

  return (
    <Card style={{ width: 300 }} hoverable cover={<img alt="id" src={imagePath2} />}>
      <div className={classes['user-info']}>
        <div>
          {' '}
          <Avatar src={imagePath} />
        </div>
        <div className={classes['user-details']}>
          <p >{user}・ </p>
          <p>{formattedDate}</p>
        </div>
      </div>
      <h3 className={classes['title']}>{title}</h3>
      <div className={classes['actions']}>
        <div className={classes['button-wrapper']}>
          <Button
            onClick={handle}
            icon={
              hearticon ? (
                <HeartFilled className={classes['button-style']} />
              ) : (
                <HeartOutlined className={classes['button-style']} />
              )
            }
          />
          {heart}
          <Button icon={<CommentOutlined className={classes['button-style']} />} />
          {comment}
          <Button style={{ float: 'right' }} icon={<ShareAltOutlined className={classes['button-style']} />} />
        </div>
      </div>
    </Card>
  );
};

export default PostItem;
