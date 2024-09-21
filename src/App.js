import './App.css';
import './navbar.css'
import './section1.css'
import './section2.css'
import './section3.css'
import './section5.css'
import './section4.css'
import './section6.css'
import {BIS, GDA} from './edu.js'
import { useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import myphoto from './images/me.jpeg';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import githubhover from './images/githubhover.png';
import insta from './images/instagram.png';
import instahover from './images/instahover.png';
import linkedinhover from './images/linkedinhover.png';
import data_chart from './images/datachart.png';
import bullet from './images/play.png'


function App() {

  const [eduview, setEduview ] = useState('title1');
  const [isHoveredinsta, setIsHoveredinsta] = useState(false);
  const [isHoveredgithub, setIsHoveredgithub] = useState(false);
  const [isHoveredlinkedin, setIsHoveredlinkedin] = useState(false);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const [barPosition, setBarPosition] = useState('');

  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  const handleTabClick = (index) => {
    setActiveTab(index); 
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const setview = (view) => {
    setEduview(view);
  };

  const renderEdu = () => {
    console.log("ekk vaduna")
    switch(eduview) {
      case 'FPA':
        return <GDA/>
      default:
        return <BIS/>
      }
  }

  const sendEmail = () => {
    const email = "recipient@example.com";
    const subject = "Your Subject";
    const body = "Hello,\n\nThis is the email body.";
    
    // Construct the mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open Gmail in a new tab
    window.open(mailtoLink, '_blank');
  };

  const [isVisible, setIsVisible] = useState(false); // State to track visibility  

  const handleDisplayToggle = () => {  
      setIsVisible(!isVisible); // Toggle the visibility state  
  };

  const [isBizvisible, setIsBizvisible] = useState(false);

  const handlebusinessDisplayToggle = () => {
    setIsBizvisible(!isBizvisible);
  }

  return (
    <div className="App">
        <div id="vertical-button-right">
          <div id="right-hairline">
            <div id="right-hairline-inner">

            </div>
          </div>
          <div id="vertical-text-wrapper">
              <button onClick={sendEmail} id="vertical-text">vishvajayanath@gmail.com</button>
          </div> 
        </div>
        <div id="vertical-button-left">
          <div id="left-hairline">
            <div id="left-hairline-inner">
            </div>
          </div>

          <div
              className="image-container"
              onMouseEnter={() => setIsHoveredlinkedin(true)}
              onMouseLeave={() => setIsHoveredlinkedin(false)} 
          >
            <a href="https://www.linkedin.com/in/wishwa-subhasingha-2404051b5/" target="_blank" rel="noopener noreferrer">
                <img id="side-bar-buttons-linkedin" src={isHoveredlinkedin ? linkedinhover : linkedin} alt="linked-in"/>
            </a>
          </div>

          <div
              className="image-container"
                  onMouseEnter={() => setIsHoveredinsta(true)}
                  onMouseLeave={() => setIsHoveredinsta(false)} 
              >
                <a href="https://www.instagram.com/_wishwa_/" target="_blank" rel="noopener noreferrer">
                    <img id="side-bar-buttons-insta" src={isHoveredinsta ? instahover : insta} alt="linked-in"/>
                </a>
          </div>

          <div
              className="image-container"
              onMouseEnter={() => setIsHoveredgithub(true)}
              onMouseLeave={() => setIsHoveredgithub(false)} 
          >
            <a href="https://github.com/Wishwa-code" target="_blank" rel="noopener noreferrer">
                <img id="side-bar-buttons-github" src={isHoveredgithub ? githubhover : github} alt="linked-in"/>
            </a>
          </div>

        </div>
        <div id="header">
          <div id="left-side-nav">
            <Spline
              scene="https://prod.spline.design/HaRl7e8cAP2nJbBy/scene.splinecode" 
              width={200}
              height={80}
            />
          </div>
          <div id="right-side-nav">

              <div className="inner-tab">
                <button className="inner-tab-button-01" onClick={() => scrollToSection(section2Ref)}>
                  <div className="inner-tab-no">01. </div>
                  <div className="inner-tab-text">About</div>
                </button>
              </div>

              <div className="inner-tab">
                <button className="inner-tab-button-01" onClick={() => scrollToSection(section3Ref)}>
                  <div className="inner-tab-no"> 02.</div>
                  <div className="inner-tab-text">Experience</div>
                </button>
              </div>

              <div className="inner-tab">
                <button className="inner-tab-button-01" onClick={() => scrollToSection(section4Ref)}>
                  <div className="inner-tab-no"> 03.</div>
                  <div className="inner-tab-text">Work</div>
                </button>
              </div>

              <div className="inner-tab">
                <button className="inner-tab-button-01" onClick={() => scrollToSection(section5Ref)} >
                  <div className="inner-tab-no">04.</div>
                  <div className="inner-tab-text">Contact</div>
                </button>
              </div>

              <div className="inner-tab">
                <button className="email-link-top" >
                  <div className="inner-tab-no-resume"></div>
                  <div className="inner-tab-text-resume">Resume</div>
                </button>
              </div>

          </div>
        </div>
        <div id="body">
          <div id="inner-body">


            <div id="section-1">

              <p id="first-line">Hi, my name is</p>
              <p id="second-line">Wishwa Jayanath. </p>
              <p id="third-line">I build things for the web.</p>
              <p id="fourth-line">I'm a Full stack web developer recently graduted from university of westminster with Upper second Honours award in Business Information Systems. Currently i am seeking for job oppurtunity to work as a <span id="highlight-text">Associate web developer</span>. </p>
                <button className="email-link-cto" onClick={() => scrollToSection(section4Ref)}>
                  <div className="inner-tab-no-resume"></div>
                  <div className="inner-tab-text-resume">Check out my work!</div>
                </button>
            </div>



            <div id="section-2" ref={section2Ref}>
              <div id="section-2-header">
                <div className="section-header-no">
                   01.
                </div>
                <div className="section-header-text">
                  About me
                </div>
                <div className="section-header-hairline">
          
                </div>
              </div>
              <div id="bio-inner">
                <div id="bio-inner-left">
                    <div id="text-top">
                     
                      <p>Hello! My name is Wishwa and I enjoy creating robust web application to solve complex business problems.</p>
                      <p> My interest in software development started back in 2006 when i first received computer as a gift. I got a scholarship to enter matara rahula collage from sooriyawewa national school.</p><p> After completing O/L exam with 8-A and 1-B pass i decided enter Business Information System degree program at IIT to learn more about building IT systems  
</p><p>Fast forward to today, and I've had the priviledge of working at well known  <a href="https://wearedesigners.net/" target="_blank">software development company</a>  where i got the oppurtunity to learn more about mobile and web applications testing.
</p><p>Here are a few technologies I’ve been working with recently:</p>
                    </div>
                    <div id="text-bottom">
                      <div id="bio-list-left">

                        <div className='left-list-item'>
                          <div className='left-list-icon'></div>
                          <div className='left-list-name'>Django</div>
                        </div>

                        <div className='left-list-item'>
                          <div className='left-list-icon'></div>
                          <div className='left-list-name'>React</div>
                        </div>

                        <div className='left-list-item'> 
                          <div className='left-list-icon'></div>
                          <div className='left-list-name'>Selenium</div>
                        </div>

                      </div>
                      <div id="bio-list-left">

                        <div className='left-list-item'>
                          <div className='left-list-icon'></div>
                          <div className='left-list-name'>AWS</div>
                        </div>

                        <div className='left-list-item'>
                          <div className='left-list-icon'></div>
                          <div className='left-list-name'>Git</div>
                        </div>

                        <div className='left-list-item'> 
                          <div className='left-list-icon'></div>
                          <div className='left-list-name'>PostgreSQL</div>
                        </div>

                      </div>
                      

                    </div>

                </div>
                <div id="bio-inner-right">
                   <div id="inner-right-image-box">
                      <img id="bio-inner-right-image" src={myphoto} alt="me"/>
                      <div id="bio-right-image-background"></div>
                   </div>
                   <div id="inner-right-borderbox">
                      background
                   </div> 
                    
                </div>
              </div>
            </div>


            <div id="section-3" ref={section3Ref}>
              <div id="section-3-header">
                <div className="section-header-no">
                  <p> 02.</p>
                </div>
                <div className="section-header-text">
                  <p> Experience</p>
                </div>
              </div>


              <div id="section-3-inner">


                <div id="section-3-left-bar" style={{ transform: `translateY(${barPosition}px)` }}>  
                </div>
                <div id="section-3-buttons">  
                    <button 
                    style={{
                      cursor: 'pointer',
                      padding: '10px 20px',
                      marginRight: '10px',
                      backgroundColor:activeTab === 0 ? 'rgba(255,228,0,0.2)' : '',
                      color: activeTab === 0 ? '#ffe400' : '#8891b0', // Change text color when active
                      fontWeight: activeTab === 0 ? 'bold' : 'normal' // Bold the active tab text
                    }}
                    
                    className="edu-left-button" id="first-highlighted" 
                    onClick={() => {
                      setview("WAD"); 
                      setBarPosition(0)
                      handleTabClick(0)
                      }}>We are designers</button>  
                    
                    <button 
                    style={{
                        cursor: 'pointer',
                        padding: '10px 20px',
                        marginRight: '10px',
                        backgroundColor:activeTab === 1 ? 'rgba(255,228,0,0.2)' : '',
                        color: activeTab === 1 ? '#ffe400' : '#8891b0', // Change text color when active
                        fontWeight: activeTab === 1 ? 'bold' : 'normal' // Bold the active tab text
                      }}
                    className="edu-left-button" 
                    onClick={() => {
                      setview("FPA"); 
                      setBarPosition(50)
                      handleTabClick(1)
                      }}>Family Pairing Assocaiation</button> 
                </div> 
                <div id="section-3-display">
                  {renderEdu()}
                </div>
              </div>
            </div>



            <div id="section-4" ref={section4Ref}>

              <div id="section-4-header">
                <div className="section-header-no">
                  <p> 03.</p>
                </div>
                <div className="section-header-text">
                  <p> Some Things I've Built</p>
                </div>
              </div>

              <div id="built-project-1">
                <div id="featured-p-image">
                  <img id="data-chart" src={data_chart} alt="data_chart" />
                  <div id="data-chart-background"></div>
                </div>
                <div id="featured-p-info">
                  <div className="feature-project-heading"> Featured Project</div>
                  <div className="featured-project-heading-2"> Haylon Theme</div>
                  <div className="featured-project-info">A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm</div>
                  <div className="tools-list">
                    <div className='tools-list-item'>VS code</div>
                    <div className='tools-list-item'>Sublime Text</div>
                    <div className='tools-list-item'>Atom</div>
                    <div className='tools-list-item'>hyper</div>
                  </div>
                  <div className="feature-project-button-list">

                    <div>
                        <a href="https://www.linkedin.com/in/wishwa-subhasingha-2404051b5/" target="_blank" rel="noopener noreferrer">
                            <div id="side-bar-buttons-linkedin-p1" ></div>
                        </a>
                      </div>

                      <div>
                            <a href="https://www.instagram.com/_wishwa_/" target="_blank" rel="noopener noreferrer">
                                <div id="side-bar-buttons-github-p1"> </div>
                            </a>
                      </div>
                  </div>
                </div>

              </div>

              <div id="build-project-2">
                <div id="featured-p2-info">
                  <div className="feature-project-heading"> Featured Project</div>
                  <div className="featured-project-heading-2"> Haylon Theme</div>
                  <div className="featured-project-2-info">A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm</div>
                  <div className="tools-list">
                    <div>VS code</div>
                    <div>Sublime Text</div>
                    <div>Atom</div>
                    <div>hyper</div>
                  </div>
                  <div className="feature-project-button-list">

                    <div
                          className="image-container"
                          onMouseEnter={() => setIsHoveredlinkedin(true)}
                          onMouseLeave={() => setIsHoveredlinkedin(false)} 
                      >
                        <a href="https://www.linkedin.com/in/wishwa-subhasingha-2404051b5/" target="_blank" rel="noopener noreferrer">
                            <img id="side-bar-buttons-linkedin" src={isHoveredlinkedin ? linkedinhover : linkedin} alt="linked-in"/>
                        </a>
                      </div>

                      <div
                          className="image-container"
                              onMouseEnter={() => setIsHoveredinsta(true)}
                              onMouseLeave={() => setIsHoveredinsta(false)} 
                          >
                            <a href="https://www.instagram.com/_wishwa_/" target="_blank" rel="noopener noreferrer">
                                <img id="side-bar-buttons-insta" src={isHoveredinsta ? instahover : insta} alt="linked-in"/>
                            </a>
                      </div>
                  </div>
                </div>
                <div id="featured-p2-image">
                  <img id="data-chart" src={data_chart} alt="data_chart" />
                </div>
              </div>

            </div>



            <div id="section-5">
              
              
              <div id="section-5-header">
                <div className="section-header-no">
                  <p> </p>
                </div>
                <div className="section-header-text">
                  <p> Other Noteworthy Project</p>
                </div>
              </div>


              <div id="coding-projects">
                <div id="coding-projects-header">
                  <p>Development Projects</p>
                </div>

                
                <div id="project-grid">
                  
                  <div className="grid-item">
                    <div className='logo-bar'>
                      <div className='first-icon'>

                      </div>
                      <div className='second-logo'></div>
                    </div>
                    <div className='grid-item-title'>EasyChannel</div>
                    <div className='grid-item-body'>A mobile application for private medical institutes to manage appointments powered by ML model to preedict session time durations.</div>
                    <div className='grid-item-tool-list'>
                      <div className='grid-item-tool-list-item'>react</div>
                      <div className='grid-item-tool-list-item'>java</div>
                      <div className='grid-item-tool-list-item'>python</div>
                    </div>
                  </div>

                  <div className="grid-item">
                    <p>this is just a one grid</p>
                  </div>

                  <div className="grid-item">
                    <p>this is just a one grid</p>
                  </div>

                </div>

                <div id="project-grid-switch" style={{ display: isVisible ? 'grid' : 'none' }}>
                  
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

                <div id="switch-button-section">  
                  <button className='email-link' id="display-button" onClick={handleDisplayToggle}>  
                      {isVisible ? 'Hide' : 'Show'} Project Grid  
                  </button>  
                </div> 


              </div>

              
              <div id="business-projects">
                <div id="coding-projects-header">
                  <p>Business Projects</p>
                </div>

                
                <div className="project-grid">
                  
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

                <div id="business-grid-switch" style={{ display: isBizvisible ? 'grid' : 'none' }}>
                  
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

                <div id="b-switch-button-section">  
                  <button className='email-link' id="display-button" onClick={handlebusinessDisplayToggle}>  
                      {isBizvisible ? 'Hide' : 'Show'} Project Grid  
                  </button>  
                </div> 


              </div>
              

            </div>



            <div id="section-6" ref={section5Ref}>
              <div id="section-6-header" > 
                <div id="section-6-header-no"> 04. </div>
                <div id="section-6-header-text"> What's next</div>
              </div>
              <div id="section-6-topic"> Get In Touch</div>
              <div id="section-6-body"> I am actively seeking opportunities to contribute my business information systems knowledge and
                 am eager to learn and grow alongside your talented team. Please feel free to reach out if you think
                  I'd be a good fit – I'd love to chat!
              </div>
              <div className='style-button-container'>
                
                <a class="email-link" href="mailto:brittany.chiang@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
                
                
              </div>

            </div>


            <div id="footer-inner">
              <a href="https://github.com/Wishwa-code/portfolio" target="_blank"><p> Designed & Built by wishwa jayanath</p></a>
            </div>



          </div>
        </div>
        <div id="footer">
          <p>Designed & Built</p>
        </div>
       
      
    </div>
  );
}

export default App;
