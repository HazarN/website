import styled, { css } from 'styled-components';

type Props = { alignment?: 'left' | 'right' };
const HeroContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ alignment }) =>
    alignment === 'right' &&
    css`
      align-items: end;
    `}

  width: 50%;
  height: 100%;
`;

HeroContainer.defaultProps = {
  alignment: 'left',
};

export default HeroContainer;
