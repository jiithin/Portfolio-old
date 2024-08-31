import React from 'react'
import {
    Image,
    ContactWrapper,
  } from "./EducationElements";
  import ScrollAnimation from "react-animate-on-scroll";
function Education() {
  return (
    <>
    
    
    <ContactWrapper id="education">
      <div className="Container">
        <div className="SectionTitle">Education & Skills</div>
        <div className="BigCard1">
          <Image
            src="/bookicon.webp"
            alt="bookIcon"
          />
          <div className="AboutBio">
            
            <ScrollAnimation animateIn="fadeIn">
              <h5 style={{fontSize:"20px",color:"#012c3d"}}>Bachelors Degree</h5>
            <strong >Mechanical Engineering</strong>.
            <br/>
            SNGCET Payyannur , 
            Kannur University.
            <br/>
            <small>2014-2018</small>

            </ScrollAnimation>

            <br /><br />
            
          

            <ScrollAnimation animateIn="fadeIn">
            <h5 style={{fontSize:"20px",color:"#012c3d"}}>Technical Skills</h5>

             <div id='skills'>
                  <strong>Programming Languages</strong>: JavaScript,
                  TypeScript.
                  <br />
                  <strong>Libraries/Frameworks</strong>: ReactJS, NodeJS,
                  ExpressJS
                  <br />
                  <strong>Database</strong>: MongoDB
                  <br />
                  <strong>WebTechnologies </strong>: HTML, CSS, Material UI,
                  Bootstrap.
                  <br />
                  <strong>VersionControl </strong>: GitHub.
                  <br />
                  <strong>Repositories </strong>: GitHub, Azure
                  <br />
                  <strong>Testing </strong>: Postman, Insomnia.
                  <br />
                  <strong>IDE</strong>: VisualStudio Code.
                  <br />
                  <strong>Platforms</strong>: Vercel
                </div>
            </ScrollAnimation>
            

          
          </div>

        </div>
      </div>
    </ContactWrapper>
    </>
  )
}

export default Education