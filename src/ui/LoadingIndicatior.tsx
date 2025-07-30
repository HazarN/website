import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(148, 163, 184, 0.2); /* slate-400/20 */
  backdrop-filter: blur(4px); /* blur effect */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #2c5364; /* Customize this to match your theme */
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

function LoadingIndicator() {
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
}

export default LoadingIndicator;
