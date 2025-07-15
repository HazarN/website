import { Code2, Database, Globe, Server } from 'lucide-react';

import IService from '@data/IService';

export async function getServices(): Promise<IService[] | null> {
  const services = [
    {
      title: 'Full-Stack Applications',
      icon: Globe,
      count: 2,
    },
    {
      title: 'Application Frontend',
      icon: Server,
      count: 18,
    },
    {
      title: 'Application Backend',
      icon: Code2,
      count: 4,
    },
  ];

  const res = await fetch('https://api.github.com/users/HazarN');
  const github = await res.json();

  const countOfFieldServices = services
    .map((service) => service.count)
    .reduce((acc, count) => acc + count, 0);

  const other = {
    title: 'Other Applications',
    icon: Database,
    count: github.public_repos - countOfFieldServices,
  };

  services.push(other);
  return services;
}
