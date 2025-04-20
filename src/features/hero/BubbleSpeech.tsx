import styled from 'styled-components';

const StyledBubbleSpeech = styled.div`
  margin-top: 256px;

  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 8px;

  width: 50%;
`;

const Bubble = styled.p`
  width: 100%;
  height: 100px;
  background-color: white;
  color: #555;
  padding: 24px;
  font-size: 18px;
  border-radius: 20px 20px 0 20px;
`;

const ProfileImage = styled.img`
  width: 55px;
  height: 50px;
  object-fit: cover;

  border-radius: 50%;
`;

function BubbleSpeech() {
  return (
    <StyledBubbleSpeech>
      <Bubble className='bubble'>text</Bubble>
      <ProfileImage src='/hero-pp.jpeg' alt='profile photo' />
    </StyledBubbleSpeech>
  );
}

export default BubbleSpeech;
