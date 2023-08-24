import PostSearchField from 'app/posts/components/PostList/components/PostSearchField';

export default function PostListToolbar() {
  return (
    <div className="flex justify-end">
      <PostSearchField />
    </div>
  );
}
