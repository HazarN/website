import styled, { css } from 'styled-components';

import media from '@styles/media';

type Props = { alignment?: 'left' | 'right' };
const HeroContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ alignment = 'left' }) =>
    alignment === 'right'
      ? css`
          align-items: end;

          ${media.tablet(
            'max-width',
            css`
              flex-direction: row;
              justify-content: end;
              align-content: end;
            `
          )}
        `
      : css`
          ${media.tablet(
            'max-width',
            css`
              width: 100%;
              align-items: center;
              text-align: center;
            `
          )}
        `}

  width: 50%;
  height: 100%;
`;

export default HeroContainer;
