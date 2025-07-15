import styled from 'styled-components';

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

export const StyledTitleWrapper = styled.div`
  h2 {
    font-style: 15px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  h3 {
    font-style: 12px;
    font-weight: 300;
  }
`;

export const StyledServicesLeft = styled.div``;
export const StyledServicesRight = styled.div``;
export const StyledServiceList = styled.ul`
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
