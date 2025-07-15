import { useEffect, useRef, useState } from 'react';

import IService from '@data/IService';
import { getServices } from '@data/services';

import ServiceItem from '@features/services/ServiceItem';
import {
  StyledServiceList,
  StyledServicesLeft,
  StyledServicesRight,
} from '@features/services/Services.styled';
import ServicesContainer from '@features/services/ServicesContainer.styled';

import AnimatedTitle from '@ui/AnimatedTitle';
import LoadingIndicator from '@ui/LoadingIndicatior';

function Services() {
  const ref = useRef<HTMLDivElement>(null);

  const [services, setServices] = useState<IService[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && !hasFetched) {
          setIsLoading((isLoading) => !isLoading);

          const data = await getServices();
          setServices(data);

          setIsLoading((isLoading) => !isLoading);
          setHasFetched(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasFetched]);

  if (isLoading) return <LoadingIndicator />;

  return (
    <ServicesContainer ref={ref}>
      <StyledServicesLeft>
        <AnimatedTitle>How do I help?</AnimatedTitle>

        <StyledServiceList>
          {services?.map((service) => (
            <ServiceItem service={service} key={service.title} />
          ))}
        </StyledServiceList>
      </StyledServicesLeft>

      <StyledServicesRight></StyledServicesRight>
    </ServicesContainer>
  );
}

export default Services;
