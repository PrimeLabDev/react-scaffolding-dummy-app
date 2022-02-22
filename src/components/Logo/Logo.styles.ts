import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const StyledLogo = styled.div`
  .logo {
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: bold;
    font-family: 'Oswald', sans-serif;
    color: ${COLORS.GREY_50};
  }

  @media (min-width: 768px) {
    .logo {
      font-size: 2rem;
    }
  }
`;
