import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { getServices, IService } from '@app/data/services';
import AnimatedTitle from '@ui/AnimatedTitle';
import LoadingIndicator from '@ui/LoadingIndicatior';
import ServiceItem, { IconWrapper, Service } from './ServiceItem';
import ServicesContainer from './ServicesContainer.styled';

// Styling
const ServicesLeft = styled.div``;
const ServicesRight = styled.div``;
const ServiceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  text-decoration: none;

  ${Service}:nth-child(1) ${IconWrapper} {
    background-color: #dd4c62;
  }
  ${Service}:nth-child(2) ${IconWrapper} {
    background-color: #00dddd;
  }
  ${Service}:nth-child(3) ${IconWrapper} {
    background-color: #af9511;
  }
  ${Service}:nth-child(4) ${IconWrapper} {
    background-color: #6f10bd;
  }
`;

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
      <ServicesLeft>
        <AnimatedTitle>How do I help?</AnimatedTitle>

        <ServiceList>
          {services?.map((service) => (
            <ServiceItem service={service} key={service.title} />
          ))}
        </ServiceList>
      </ServicesLeft>

      <ServicesRight></ServicesRight>
    </ServicesContainer>
  );
}

export default Services;
