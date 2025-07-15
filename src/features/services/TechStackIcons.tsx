import TechStackIcon from '@data/TechStackIcon';

import { AnimatedGrid, IconImage, Wrapper } from '@features/services/TechStackIcons.styled';

type Props = {
  icons: TechStackIcon[];
  size?: number;
  columns?: number;
};

const gridVariants = {
  initial: {
    x: 100,
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

function TechStackIcons({ icons, size = 64, columns = 6 }: Props) {
  return (
    <AnimatedGrid columns={columns} variants={gridVariants} initial='initial' whileInView='animate'>
      {icons.map((icon) => (
        <Wrapper key={icon.name}>
          <IconImage src={`/icons/${icon.fileName}`} alt={icon.name} size={size} />
        </Wrapper>
      ))}
    </AnimatedGrid>
  );
}

export default TechStackIcons;
