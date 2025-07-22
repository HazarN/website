import styled from 'styled-components';

const StyledPageSection = styled.section`
  height: 100vh;
  scroll-snap-align: center;
`;

type Props = {
  id?: string;
  children?: React.ReactNode;
};
function PageSection({ id, children }: Props) {
  return <StyledPageSection id={id}>{children}</StyledPageSection>;
}

export default PageSection;
