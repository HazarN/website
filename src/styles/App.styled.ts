import styled from 'styled-components';

const StyledApp = styled.main`
  max-width: 1536px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1288px) {
    max-width: 1288px;
  }

  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

export default StyledApp;
