import PopularPosts from 'app/posts/[slug]/components/PopularPosts';
import SubscribeNewsletter from 'components/SubscribeNewsletter';

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex justify-between px-20 my-16">
        <section className="flex-grow pr-20">{children}</section>
        <aside className="w-[420px]">
          <PopularPosts />
        </aside>
      </div>
      <SubscribeNewsletter />
    </main>
  );
}
