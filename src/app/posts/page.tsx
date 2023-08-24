import Loading from 'app/components/Loading';
import SubscribeNewsletter from 'app/components/SubscribeNewsletter';
import Banner from 'app/posts/components/Banner';
import PostList from 'app/posts/components/PostList';
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
