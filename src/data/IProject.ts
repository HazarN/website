import { ReactNode } from 'react';

export default interface IProject {
  id: number;
  images: string[];
  title: string;
  desc: ReactNode;
  link: string | null;
}
