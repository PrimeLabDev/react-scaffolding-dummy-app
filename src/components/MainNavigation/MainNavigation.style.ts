import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const StyledNav = styled.div`
  .header {
    width: 100%;
    height: 6rem;
    background-color: ${COLORS.GREY_900};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
  }

  .header ul {
    list-style: none;
    display: flex;
    align-items: baseline;
    margin: 0;
    padding: 0;
  }

  .header li {
    margin: 0 1rem;
  }

  .header a {
    color: ${COLORS.GREY_100};
    font-size: 1rem;
    text-decoration: none;
  }

  .header a:hover,
  .header a:active,
  .header a.active {
    color: ${COLORS.GREY_200};
  }

  @media (min-width: 768px) {
    .header ul {
      gap: 0.5rem;
    }
    .header a {
      font-size: 1.25rem;
    }
  }
`;
