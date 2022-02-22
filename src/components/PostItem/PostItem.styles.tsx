import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const StyledPostItem = styled.div`
  .post {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    background-color: ${COLORS.GREY_800};
    text-align: center;
  }

  .post a {
    color: ${COLORS.GREY_100};
    text-decoration: none;
  }

  .image {
    width: 100%;
    max-height: 20rem;
    overflow: hidden;
  }

  .image img {
    object-fit: cover;
  }

  .content {
    padding: 1rem;
  }

  .content h3 {
    margin: 0.5rem 0;
    font-size: 1.5rem;
  }

  .content time {
    font-style: italic;
    color: ${COLORS.GREY_300};
  }

  .content p {
    line-height: 1.5rem;
  }
`;
