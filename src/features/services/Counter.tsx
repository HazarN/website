import { animate } from 'motion';
import { useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
  text-align: center;

  h1 {
    color: #dd4c62;
    font-size: 48px;
  }

  p {
    font-size: 15px;
  }
`;

type Props = {
  from: number;
  to: number;
  text: string;
};
function Counter({ from, to, text }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const [count, setCount] = useState(from);

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 3,
      ease: 'easeOut',
      onUpdate: (prev) => {
        setCount(Math.trunc(prev));
      },
    });

    return () => animation.cancel();
  }, [isInView, from, to]);

  return (
    <StyledCounter ref={ref}>
      <h1>{count}+</h1>
      <p>{text}</p>
    </StyledCounter>
  );
}

export default Counter;
