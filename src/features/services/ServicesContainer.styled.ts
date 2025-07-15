import media from '@styles/media';
import styled, { css } from 'styled-components';

const ServicesContainer = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;

  & > * {
    width: 50%;
  }

  ${media.tablet(
    'max-width',
    css`
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `
  )}
`;

export default ServicesContainer;
