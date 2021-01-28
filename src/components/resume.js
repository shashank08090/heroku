import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Shashank Singh</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Enthusiastic Web developer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of Web development technologies and continuously learning more in the same. Motivated to learn, grow and excel in IT industry.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Opp Bangalore Bazaar,Near Karnataka Gramin Bank,Ashok Men's Residence, Bellandur, Bangalore Karnataka</p>
            <h5>Phone</h5>
            <p>+91 9598425068</p>
            <h5>Email</h5>
            <p>shashank08090@gmail.com</p>
            <h5>Web</h5>
            <p>https://portfolio8090.herokuapp.com/resume</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2014}
              endYear={2018}
              schoolName="My University"
              schoolDescription="BBD-NITM , Abdul Kalam Technical University,Lucknow,Uttar Pradesh"
               />

               <Education
                 startYear={2020}
                 endYear={2020}
                 schoolName="Coding Ninjas"
                 schoolDescription="Learnt Full stack web development- HTML CSS Javascript ReactJS(Primary Skill) "
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2021}
              jobName="A4 Analyst - Capgemini"
              jobDescription="Worked in SAP / Full stack web developer in several project in capgemini"
              />

              <Experience
                startYear={2020}
                endYear={2021}
                jobName="Web developer"
                jobDescription=" Have worked in HTML CSS Bootstrap ReactJs,built several projects (1) Portfolio website (2)Food delivery website "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
