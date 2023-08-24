import { Col, Row } from 'antd';
import Pagination from 'app/components/Pagination';
import PostCard from 'app/components/PostCard';
import PostListToolbar from 'app/posts/components/PostList/components/PostListToolbar';
import { Post } from 'models/Post';
import { GetPostsParams, getPosts } from 'services/post.service';

type Props = {
  searchParams: GetPostsParams;
};

export default async function PostList({ searchParams }: Props) {
  const { posts, total } = await getPosts({ ...searchParams });

  return (
    <section className="px-20 mb-12">
      <PostListToolbar />
      <div className="mb-12 mt-8">
        <Row gutter={[16, 24]}>
          {posts.length ? (
            posts.map((post: Post) => (
              <Col className="gutter-row" span={6} key={post.id}>
                <PostCard post={post} />
              </Col>
            ))
          ) : (
            <p className="text-lg text-center mx-auto">There are no posts</p>
          )}
        </Row>
      </div>

      <Pagination total={total} />
    </section>
  );
}
