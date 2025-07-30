import styled from 'styled-components';

const StyledSection = styled.section`
  height: 100vh;
  scroll-snap-align: center;
`;

type Props = {
  id?: string;
  children?: React.ReactNode;
};
function Section({ id, children }: Props) {
  return <StyledSection id={id}>{children}</StyledSection>;
}

export default Section;
