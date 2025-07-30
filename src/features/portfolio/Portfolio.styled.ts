import { motion } from 'motion/react';
import styled, { css } from 'styled-components';

import media from '@styles/media';

const StyledPortfolio = styled.section<{ numOfProjects: number }>`
  ${({ numOfProjects }) => css`
    height: ${numOfProjects * 100}dvh;
  `}

  position: relative;
`;
export default StyledPortfolio;

const StyledPortfolioList = styled.ul<{ numOfProjects: number }>`
  position: sticky;
  top: 0;

  display: flex;
  width: max-content;
  height: 100dvh;

  background: linear-gradient(to bottom right, inherit, #2c5364);
  background-size: ${({ numOfProjects }) => `${numOfProjects * 100}vw`} 100%;
`;
export const AnimatedStyledPortfolioList = motion(StyledPortfolioList);

export const StyledPortfolioItem = styled.li`
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 100px;

  ${media.extra(
    'max-width',
    css`
      gap: 50px;
    `
  )}

  ${media.laptop(
    'max-width',
    css`
      flex-direction: column;
    `
  )}
`;

const ImageWrapper = styled.div`
  width: 40%;
  border-radius: 10px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${media.laptop(
    'max-width',
    css`
      width: 80%;
    `
  )}
`;
export const AnimatedImageWrapper = motion(ImageWrapper);

const TextWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  max-height: 100%;
  overflow: visible;

  h1 {
    font-size: 56px;
  }

  p {
    font-weight: 300;
  }

  ${media.extra(
    'max-width',
    css`
      h1 {
        font-size: 48px;
      }
    `
  )}
  ${media.desktop(
    'max-width',
    css`
      h1 {
        font-size: 36px;
      }
    `
  )}
  ${media.laptop(
    'max-width',
    css`
      width: 80%;
    `
  )}
  ${media.tablet(
    'max-width',
    css`
      h1 {
        font-size: 24px;
      }
    `
  )}
`;
export const AnimatedTextWrapper = motion(TextWrapper);
