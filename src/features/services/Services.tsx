import { useEffect, useRef, useState } from 'react';

import IService from '@data/IService';
import { getServices } from '@data/services';

import { StyledServicesRight } from '@features/services/Services.styled';
import ServicesContainer from '@features/services/ServicesContainer.styled';

import LoadingIndicator from '@ui/LoadingIndicatior';
import ServicesLeft from './ServicesLeft';

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
      <ServicesLeft services={services} />

      <StyledServicesRight></StyledServicesRight>
    </ServicesContainer>
  );
}

export default Services;
