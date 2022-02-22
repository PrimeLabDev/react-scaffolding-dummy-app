import PostItem from '@/components/PostItem';
import { StyledPostGrid } from './PostGrid.styles';

const PostGrid = (props: any) => {
  const { posts } = props;
  return (
    <StyledPostGrid>
      <ul className="grid">
        {posts.map((post: any, i: number) => (
          <PostItem post={post} key={i} />
        ))}
      </ul>
    </StyledPostGrid>
  );
};
export default PostGrid;
