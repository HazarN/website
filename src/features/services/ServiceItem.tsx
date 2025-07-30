import IService from '@data/IService';

import {
  StyledIconWrapper,
  StyledService,
  StyledTitleWrapper,
} from '@features/services/Services.styled';

type Props = {
  service: IService;
};
function ServiceItem({ service }: Props) {
  const Icon = service.icon;

  return (
    <StyledService>
      <StyledIconWrapper>
        <Icon size={72} />
      </StyledIconWrapper>

      <StyledTitleWrapper>
        <h2>{service.title}</h2>
        <h3>{service.count} Projects</h3>
      </StyledTitleWrapper>
    </StyledService>
  );
}

export default ServiceItem;
