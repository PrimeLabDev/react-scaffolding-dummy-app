import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const StyledFeaturedPost = styled.div`
  .latest {
    width: 90%;
    max-width: 80rem;
    margin: 2rem auto;
  }

  .latest h2 {
    font-size: 2rem;
    color: ${COLORS.GREY_800};
    text-align: center;
  }

  @media (min-width: 768px) {
    .latest h2 {
      font-size: 4rem;
    }
  }
`;
