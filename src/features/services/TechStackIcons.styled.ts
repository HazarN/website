import media from '@styles/media';
import { motion } from 'motion/react';
import styled, { css } from 'styled-components';

const Grid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 64px;
  padding: 24px;
  background-color: #2c5364;
  border-radius: 20px;

  transition: grid-template-columns 1s ease-out;

  ${media.extra(
    'max-width',
    css`
      grid-template-columns: repeat(4, 1fr);
    `
  )}
  ${media.laptop(
    'max-width',
    css`
      display: none;
    `
  )};
`;
export const AnimatedGrid = motion(Grid);

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const IconImage = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  object-fit: contain;
`;
