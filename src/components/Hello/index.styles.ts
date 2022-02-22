import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const StylesHelloStyles = styled.div`
  .hello {
    text-align: center;
    background-image: linear-gradient(to bottom, ${COLORS.GREY_900}, ${COLORS.GREY_800});
    padding: 2rem 0;
  }
  .image {
    width: 300px;
    height: 300px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    overflow: hidden;
    background-color: ${COLORS.GREY_700};
    margin: auto;
  }

  .image img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }
  .hello h1 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: ${COLORS.GREY_300};
  }

  .hello p {
    font-size: 1.5rem;
    color: ${COLORS.GREY_200};
    width: 90%;
    max-width: 40rem;
    margin: auto;
  }
`;
