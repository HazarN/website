import IService from '@data/IService';

import Counter from '@features/services/Counter';
import ServiceItem from '@features/services/ServiceItem';
import {
  AnimatedStyledServiceList,
  CounterContainer,
  StyledServicesLeft,
} from '@features/services/Services.styled';

import AnimatedTitle from '@ui/AnimatedTitle';

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

type Props = {
  services: IService[] | null;
};
function ServicesLeft({ services }: Props) {
  const numOfRepos = services
    ?.map((service) => service.count)
    .reduce((acc, count) => acc + count, 0) as number;

  return (
    <StyledServicesLeft>
      <AnimatedTitle variants={textVariants} initial='initial' whileInView='animate'>
        How do I help?
      </AnimatedTitle>

      <AnimatedStyledServiceList variants={listVariants} initial='initial' whileInView='animate'>
        {services?.map((service) => (
          <ServiceItem service={service} key={service.title} />
        ))}
      </AnimatedStyledServiceList>

      <CounterContainer>
        <Counter from={0} to={numOfRepos} text='Projects Completed' />
      </CounterContainer>
    </StyledServicesLeft>
  );
}

export default ServicesLeft;
