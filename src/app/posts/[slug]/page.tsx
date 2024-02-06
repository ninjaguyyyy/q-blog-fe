import Comments from 'app/posts/[slug]/components/Comments';
import { getPost } from 'services/post.service';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Props) {
  // const post = await getPost(params.slug);
  return (
    <section>
      <h1 className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100 max-w-4xl ">
        {/* {post.title} */}
      </h1>
      <hr className="mt -4 mb-12" />
      <p>My Post: {params.slug}</p>

      <hr className="mt-24 mb-8" />

      <Comments />
    </section>
  );
}
