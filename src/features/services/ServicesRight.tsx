import techStacks from '@data/techStacks';
import { StyledServicesRight } from '@features/services/Services.styled';
import TechStackIcons from '@features/services/TechStackIcons';

function ServicesRight() {
  return (
    <StyledServicesRight>
      <TechStackIcons icons={techStacks} />
    </StyledServicesRight>
  );
}

export default ServicesRight;
