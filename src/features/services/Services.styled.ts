import media from '@styles/media';
import { motion } from 'motion/react';
import styled, { css } from 'styled-components';

export const StyledService = styled.section`
  display: flex;
  align-items: center;
  gap: 16px;

  width: 50%;
  padding: 30px;
  border-radius: 20px;
  background-color: #2c5364;
  cursor: pointer;

  &:nth-child(1) {
    margin-top: 36px;
  }

  ${media.extra(
    'max-width',
    css`
      width: 70%;
    `
  )}

  ${media.desktop(
    'max-width',
    css`
      width: 80%;
    `
  )}

  ${media.laptop(
    'max-width',
    css`
      width: 100%;
    `
  )}
`;

export const StyledServicesLeft = styled.div`
  ${media.laptop(
    'max-width',
    css`
      width: 100%;
    `
  )}
`;
export const StyledServicesRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  border-radius: 100%;

  svg {
    width: 32px;
    height: 32px;
  }
`;

const StyledServiceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  text-decoration: none;

  ${StyledService}:nth-child(1) ${StyledIconWrapper} {
    background-color: #dd4c62;
  }
  ${StyledService}:nth-child(2) ${StyledIconWrapper} {
    background-color: #00dddd;
  }
  ${StyledService}:nth-child(3) ${StyledIconWrapper} {
    background-color: #af9511;
  }
  ${StyledService}:nth-child(4) ${StyledIconWrapper} {
    background-color: #6f10bd;
  }
`;
export const AnimatedStyledServiceList = motion(StyledServiceList);

export const StyledTitleWrapper = styled.div`
  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 15px;
    font-weight: 300;
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 24px;

  ${media.extra(
    'max-width',
    css`
      width: 70%;
    `
  )}

  ${media.desktop(
    'max-width',
    css`
      width: 100%;
    `
  )}
`;
