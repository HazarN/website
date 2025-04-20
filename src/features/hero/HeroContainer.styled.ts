import media from '@styles/media';
import styled, { css } from 'styled-components';

type Props = { alignment?: 'left' | 'right' };
const HeroContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ alignment }) =>
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

HeroContainer.defaultProps = {
  alignment: 'left',
};

export default HeroContainer;
