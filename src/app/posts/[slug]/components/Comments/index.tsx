import CommentForm from 'app/posts/[slug]/components/CommentForm';
import ListComment from './ListComment';
export default function Comments() {
  return (
    <div>
      <CommentForm />    
      <ListComment/>
    </div>
  );
}
