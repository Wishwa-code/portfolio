import './App.css';
import './navbar.css'
import './section1.css'
import './section2.css'
import './education.css'
import {BIS, GDA} from './edu.js'
import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import myphoto from './images/me.jpeg'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import insta from './images/instagram.png'

function App() {

  const [eduview, setEduview ] = useState('title1');

  const setview = (view) => {
    setEduview(view);
  };

  const renderEdu = () => {
    console.log("ekk vaduna")
    switch(eduview) {
      case 'BIS':
        return <div>this is temp text</div>
      case 'GDA':
        return <GDA/>
      case 'WPP':
        return <div>title3</div>
      default:
        return <BIS/> 
      }
  }

  return (
    <div className="App">
        <div id="vertical-button-right">
          <div id="right-hairline">
            <div id="right-hairline-inner">

            </div>
          </div>
          <div id="vertical-text-wrapper">
              <p id="vertical-text">vishvajayanath@gmail.com</p>
          </div> 
        </div>
        <div id="vertical-button-left">
          <div id="left-hairline">
            <div id="left-hairline-inner">
            </div>
          </div>
          <div><img id="linkedin-logo" src={linkedin} alt="linked-in"/></div>
          <div><img id="insta-logo" src={insta} alt="insta"/></div>
          <div><img id="git-logo" src={github} alt="git"/></div>
        </div>
        <div id="header">
          <div id="left-side-nav">
            <Spline
              scene="https://prod.spline.design/HaRl7e8cAP2nJbBy/scene.splinecode" 
              width={200}
              height={100}
            />
          </div>
          <div id="right-side-nav">

              <div className="inner-tab">
                <div className="inner-tab-no">01. </div>
                <div className="inner-tab-text">about</div>
              </div>

              <div className="inner-tab">
                <div className="inner-tab-no"> 02.</div>
                <div className="inner-tab-text">timelapse</div>
              </div>

              <div className="inner-tab">
                <div className="inner-tab-no"> 03.</div>
                <div className="inner-tab-text">projects</div>
              </div>

              <div className="inner-tab">
                <div className="inner-tab-no">04.</div>
                <div className="inner-tab-text">contact</div>
              </div>

              <div className="inner-tab">
                <div className="inner-tab-no">05.</div>
                <div className="inner-tab-text">Resume</div>
              </div>

          </div>
        </div>
        <div id="body">
          <div id="inner-body">
            <div id="section-1">
              <p id="first-line">Hi, my name is</p>
              <p id="second-line">Wishwa Jayanath </p>
              <p id="third-line">I build things for the web.</p>
              <p id="fourth-line">I recently gradated from university of Westminster 
                in Business Information Systems. I am skilled in Python, JavaScript and 
                Dart Programming languages. I am passionate about developing machine 
                learning models, and i recently built a prediction system for Sri Lankan 
                export market. Currently seeking a opportunity to work with a innovative 
                company while learning new things.</p>
            </div>



            <div id="section-2">
              <div id="section-2-header">
                <div className="section-header-no">
                  <p> 01.</p>
                </div>
                <div className="section-header-text">
                  <p> About me</p>
                </div>
              </div>
              <div id="bio-inner">
                <div id="bio-inner-left">
                    <div id="text-top">
                     
                      <p>Hello! My name is Wishwa and I enjoy finding bugs and optimizing web and mobile application to deliver exceptional products to end users.</p>
                      <p> My interest in software testing started back in 2021 wh <a href="https://wearedesigners.net/" target="_blank">software development company</a> en i decided to learn about cyber security as a part of my second year research project.</p><p>
Fast forward to today, and I've had the priviledge of working at well known software development company where i got the oppurtunity to learn more about mobile and web applications testing.
My main focus these days is learning more about Machine Learning and Artificial Intelligence to adapt my skill set to fast moving landscape of the software industry.</p><p>
I also recently completed Google Data Analytics Professional Certificate that covers fundamental knowledge for ML and AI development.

Here are a few technologies and tools I’ve been working with recently:</p>
                    </div>
                    <div id="text-bottom">
                      <div id="bio-list-left">
                        <ul>
                          <li>React</li>
                          <li>Appium</li>
                          <li>Google Analytics</li>
                        </ul>
                      </div>
                      <div id="bio-list-right">
                        <ul>
                          <li>Flask</li>
                          <li>Databricks</li>
                          <li>WebFlow</li>
                        </ul>
                      </div>
                    </div>

                </div>
                <div id="bio-inner-right">
                    <img src={myphoto} alt="me"/>
                </div>
              </div>
            </div>


            <div id="section-3">
              <div id="section-3-header">
                <div className="section-header-no">
                  <p> 01.</p>
                </div>
                <div className="section-header-text">
                  <p> Education</p>
                </div>
              </div>
              <div id="section-3-inner">
                <div id="section-3-buttons">  
                    <button className="edu-left-button" onClick={() => setview("BIS")}>Business Information Systems</button>  
                    <button className="edu-left-button" onClick={() => setview("GDA")}>Google Data Analytics</button> 
                    <button className="edu-left-button" onClick={() => setview("WPP")}>Web Programming with Python</button> 
                    <button className="edu-left-button" onClick={() => setview("EJP")}>Evotech Java Programming</button> 
                </div> 
                <div id="section-3-display">
                  {renderEdu()}
                </div>
              </div>
            </div>



            <div id="section-4">

              <div id="built-project-1">
                <div id="featured-p-image">
                  <p>some text on image</p>
                </div>
                <div id="featured-p-info">
                  <p>some text on texts side</p>
                </div>

              </div>

              <div id="build-project-2">
                <div id="featured-p2-image">
                  <p>some text on image sdfgsd</p>
                </div>
                <div id="featured-p2-info">
                  <p>some text on texts side</p>
                </div>

              </div>

            </div>



            <div id="section-5">
              
              <div id="section-5-header">
                <h1>this is the section for other noteworthy projects</h1>
              </div>

              <div id="coding-projects">
                <div id="coding-projects-header">
                  <h1>some text</h1>
                </div>
                <div id="project-grid">
                  
                  <div className="grid-item">
                    <p>this is just a one grid</p>
                  </div>

                  <div className="grid-item">
                    <p>this is just a one grid</p>
                  </div>

                  <div className="grid-item">
                    <p>this is just a one grid</p>
                  </div>

                  <div className="grid-item">
                    <p>this is just a one grid</p>
                  </div>

                  <div className="grid-item">
                    <p>this is just a one grid</p>
                  </div>

                  <div className="grid-item">
                    <p>this is just a one grid</p>
                  </div>


                </div>
              </div>

              <div>
                <p>this is the section for business implementetaion and managemnet related projects</p>
              </div>
              
              

            </div>



            <div id="section-6">
              <p> this is the sectio to display get in touch</p>
            </div>



          </div>
        </div>
        <div id="footer">
          <p>this is the footer</p>
        </div>
       
      
    </div>
  );
}

export default App;
