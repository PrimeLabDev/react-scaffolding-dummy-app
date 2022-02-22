import Link from 'next/link';
import Image from 'next/image';
import { StyledPostItem } from './PostItem.styles';

const PostItem = (props: any) => {
  const { post } = props;
  const { title, image, excerpt, date, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const imagePath = `/img/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <StyledPostItem>
      <li className="post">
        <Link href={linkPath}>
          <a>
            <div className="image">
              <Image src={imagePath} alt={title} width={300} height={200} layout="responsive" />
            </div>
            <div className="content">
              <h3>{title}</h3>
              <time>{formattedDate}</time>
              <p>{excerpt}</p>
            </div>
          </a>
        </Link>
      </li>
    </StyledPostItem>
  );
};
export default PostItem;
