import { IService } from '@app/data/services';
import styled from 'styled-components';

export const Service = styled.section`
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

export const IconWrapper = styled.div`
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

const TitleWrapper = styled.div`
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

type Props = {
  service: IService;
};
function ServiceItem({ service }: Props) {
  const Icon = service.icon;

  return (
    <Service>
      <IconWrapper>
        <Icon size={72} />
      </IconWrapper>

      <TitleWrapper>
        <h2>{service.title}</h2>
        <h3>{service.count} Projects</h3>
      </TitleWrapper>
    </Service>
  );
}

export default ServiceItem;
