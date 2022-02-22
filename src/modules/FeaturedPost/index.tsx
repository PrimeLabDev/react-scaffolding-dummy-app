import PostGrid from '@/components/PostGrid';
import { StyledFeaturedPost } from './index.styles';

const FeaturedPosts = (props: any) => {
  const { posts } = props;
  return (
    <StyledFeaturedPost>
      <section className="latest">
        <h2>Featured Posts</h2>
        <PostGrid posts={posts} />
      </section>
    </StyledFeaturedPost>
  );
};
export default FeaturedPosts;
