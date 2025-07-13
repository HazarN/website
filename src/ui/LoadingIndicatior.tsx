import { RotateCw } from 'lucide-react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const LoadingWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  backdrop-filter: blur(6px);
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
const LoaderIcon = styled(RotateCw)`
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

function LoadingIndicator() {
  return (
    <LoadingWrapper>
      <LoaderIcon />
    </LoadingWrapper>
  );
}

export default LoadingIndicator;
