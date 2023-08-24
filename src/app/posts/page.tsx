import Loading from 'app/components/Loading';
import Banner from 'app/posts/components/Banner';
import PostList from 'app/posts/components/PostList';
import SubscribeNewsletter from 'components/SubscribeNewsletter';
import { PageProps } from 'models/common';
import { Suspense } from 'react';

export default async function Posts({ searchParams }: PageProps) {
  return (
    <section>
      <Banner />
      <Suspense fallback={<Loading />}>
        <PostList searchParams={searchParams} />
      </Suspense>
      <SubscribeNewsletter />
    </section>
  );
}
