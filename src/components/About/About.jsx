import React from 'react'
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  AboutWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
import { Fade } from 'react-awesome-reveal';
function About() {
  return (
    <>

    
    
    <AboutWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <Fade >
          <Image
            src="/me.png"
            alt="my-photo"
          />
        </Fade>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeIn">
            Hello! I'm <strong>Jithin</strong>. And I'm from the enchanting lands of Kerala, India. Armed with a bachelor's degree in Mechanical Engineering from Kannur University. However, my heart was drawn to the captivating world of information technology, fueled by an insatiable curiosity about the inner workings of modern technologies. Driven by this passion, I embarked on a journey of self-directed learning, delving into the intricacies of web development and JavaScript.
            </ScrollAnimation>

            <br /><br />
            
        

            <ScrollAnimation animateIn="fadeIn">
            Today, I stand as a proficient MEARN stack developer, having honed my skills through dedicated practice and hands-on experience. My current endeavor finds me serving as an intern at Luminar Technolab, where I am afforded the opportunity to apply my expertise and contribute to innovative projects. Each day presents new challenges and opportunities for growth, and I embrace them eagerly as I continue to evolve and thrive in the dynamic landscape of technology.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </AboutWrapper>
    </>
  )
}

export default About