import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

import HeroContainer from '@features/hero/HeroContainer.styled';

const HeroTitle = styled.h1`
  margin-top: 50px;
  font-size: 100px;
  color: wheat;

  span {
    color: white;
  }
`;

const HeroInfo = styled.div`
  width: 30%;

  h2 {
    white-space: nowrap;
  }

  p {
    font-size: 16px;
    margin: 16px 0;
    color: #ddd;
  }
`;

const Links = styled.ul`
  display: flex;
  justify-content: space-between;

  margin-top: 16px;
`;

const MouseIcon = styled.a`
  margin-bottom: 50px;
  width: max-content;
`;

function HeroLeft() {
  return (
    <HeroContainer>
      <HeroTitle>
        Hey There,
        <br />
        <span>I'm Hazar</span>
      </HeroTitle>

      <HeroInfo>
        <h2>Software Developer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <Links>
          <a target='_blank' href='https://linkedin.com/in/hazarnamdar'>
            <FaLinkedin size={48} />
          </a>

          <a target='_blank' href='https://github.com/HazarN'>
            <FaGithub size={48} />
          </a>

          <a target='_blank' href='https://leetcode.com/HazarN'>
            <FaGlobe size={48} />
          </a>
        </Links>
      </HeroInfo>

      <MouseIcon href='/#services'>
        <svg
          width='50px'
          height='50px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z'
            stroke='white'
            strokeWidth='1'
          />
          <path d='M12 5V8' stroke='white' strokeWidth='1' strokeLinecap='round' />
        </svg>
      </MouseIcon>
    </HeroContainer>
  );
}

export default HeroLeft;
