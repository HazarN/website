import styled, { css } from 'styled-components';

import media from '@styles/media';

const StyledContact = styled.div`
  display: flex;
  height: 100%;
  gap: 100px;

  & > * {
    display: flex;
    justify-content: center;
    width: 50%;
    height: 100%;
    padding: 20px;
  }

  ${media.tablet(
    'max-width',
    css`
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0;

      & > * {
        width: 100% !important;

        &:first-child {
          height: 60%;
        }
        &:last-child {
          height: 40%;
        }
      }
    `
  )}
`;

export default StyledContact;
