import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";

const SocialContainer = styled.div`
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  #linkedin {
    font-size: 2.3rem;
    color: #95adb8;
    &:hover {
      color: #126bc4;
    }
 
  }

        #github {
    font-size: 2.3rem;
    color: #95adb8;
    &:hover {
      color: #080808;
    }
}

  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
    position: relative;
    top: 0;
    left: 0;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }

  #linkedin {
    font-size: 2.3rem;
    color: #126bc4;

    }

    #github {
    font-size: 2.3rem;
    color: #080808;
}
    .item + .item {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;
function FixSocialIcon() {
  return (
    <SocialContainer>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <ul>
          <li className="item">
            <a id="linkedin"
              href="https://www.linkedin.com/in/jiithin-gangadharan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="item">
            <a id="github"
              href="https://github.com/jiithin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub/>
            </a>
          </li>
        </ul>
      </ScrollAnimation>
    </SocialContainer>
  );
}

export default FixSocialIcon;
