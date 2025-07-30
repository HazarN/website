import { motion } from 'motion/react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'basic' | 'wide';
};
const Button = styled.button<ButtonProps>`
  padding: 12px;
  margin-right: 12px;
  color: white;
  border-radius: 10px;
  border: none;
  font-weight: 500;
  transition: background-color 0.3s ease;

  ${({ variant = 'primary' }) =>
    variant === 'primary'
      ? css`
          background-color: #dd4c62;

          &:hover {
            cursor: pointer;
            background-color: #bf384e;
          }
        `
      : css`
          color: #333;
          background-color: #ffb84c;

          &:hover {
            background-color: #e6a734;
          }
        `}

  ${({ size = 'basic' }) =>
    size === 'wide' &&
    css`
      width: 100%;
    `}
`;
export const AnimatedButton = motion(Button);

export default Button;
