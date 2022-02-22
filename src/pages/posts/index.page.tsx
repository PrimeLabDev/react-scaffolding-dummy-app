import { Fragment } from 'react';
import Hello from '@/components/Hello';
import FeaturedPosts from '@/modules/FeaturedPost';
import MainNavigation from '@/components/MainNavigation';
import { DUMMY_POSTS } from '@/constants/posts';

const Posts = () => {
  return (
    <Fragment>
      <MainNavigation />
      <Hello />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default Posts;
