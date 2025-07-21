import { motion } from 'motion/react';
import styled, { css } from 'styled-components';

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

  background: linear-gradient(to bottom right, #203b44, #2c5364);
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
`;

export const ImageWrapper = styled.div`
  width: 40%;
  border-radius: 10px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  h1 {
    font-size: 56px;
  }

  p {
    font-weight: 300;
  }

  button {
    background-color: rgb(221, 76, 98);
    padding: 12px;
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 500;
  }
  button:hover {
    background-color: rgba(221, 86, 110, 1);
  }
`;
