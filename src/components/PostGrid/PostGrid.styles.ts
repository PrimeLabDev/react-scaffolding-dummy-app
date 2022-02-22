import styled from '@emotion/styled';

export const StyledPostGrid = styled.div`
  .grid {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1.5rem;
    align-content: center;
  }
`;
