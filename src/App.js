import './App.css';
import './Navbar.css'
import './section1.css'
import './section2.css'
import './section2-5.css'
import './section3.css'
import './section5.css'
import './section4.css'
import './section6.css'
import Navbar from './Navbar';
import {UOW, Google, WPP, EJP } from './certificates.js'
import {BIS, GDA} from './edu.js'
import { useState, useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import myphoto from './images/me.jpg';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import githubhover from './images/githubhover.png';
import insta from './images/instagram.png';
import instahover from './images/instahover.png';
import linkedinhover from './images/linkedinhover.png';
import data_chart from './images/datachart.png';
import bullet from './images/play.png';
import samproj1 from './images/panthiya.png';
import samproj2 from './images/samproj2img.png'



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
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    const email = "wishwakankanamge129@gmail.com";
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

   const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinksRef = useRef(null);
    const [isToggled, setIsToggled] = useState(false);

  // Toggle the menu and switch background image


    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
        setIsToggled(!isToggled);

        // Safely toggle the 'active' class on the nav-links
        if (navLinksRef.current) {
            navLinksRef.current.classList.toggle('active');
        }
    };

     const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setIsNavbarVisible(false);
            } else {
                // Scrolling up
                setIsNavbarVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

   const [currentIndex, setCurrentIndex] = useState(3);
  const cardListRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const cardWidth = useRef(0);

  const cards = [
    <EJP/>,
    <WPP/>,
    <Google/>,
    <UOW/>
  ];
  const cardColors = ['#1f2833', '#1f2833', '#1f2833','#1f2833'];

  useEffect(() => {
    // Calculate card width when the component mounts or window resizes
    cardWidth.current = cardListRef.current.children[0].offsetWidth + 20;
    const handleResize = () => {
      cardWidth.current = cardListRef.current.children[0].offsetWidth + 20;
      updateCardPosition();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updateCardPosition = () => {
    cardListRef.current.style.transform = `translateX(-${currentIndex * cardWidth.current}px)`;
  };

  const handleSwipeStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleSwipeMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX.current - currentX;
    cardListRef.current.style.transform = `translateX(-${(currentIndex * cardWidth.current) + diffX}px)`;
  };

  const handleSwipeEnd = (e) => {
    if (!isDragging.current) return;
    const endX = e.changedTouches[0].clientX;
    const diffX = startX.current - endX;
    isDragging.current = false;

    // Move to the next card if swipe is more than 50px
    if (diffX > 50 && currentIndex > 0) {
      
      console.log(currentIndex, cardListRef.current.children.length);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
    // Move to the previous card if swipe is more than -50px
    if (diffX < -50 && currentIndex < 3) {
      console.log(currentIndex)
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }

    // Smoothly update card position after swiping
    updateCardPosition();
  };

  // Handle next button click
  const handleNext = () => {
    if (currentIndex < cardListRef.current.children.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Handle previous button click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    updateCardPosition();
  }, [currentIndex]);

  return (
    <div className="App">
        <div id="vertical-button-right">
          <div id="right-hairline">
            <div id="right-hairline-inner">

            </div>
          </div>
          <div id="vertical-text-wrapper">
              <button onClick={sendEmail} id="vertical-text">wishwakankanamge@gmail.com</button>
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
          <nav className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}>
            <div className="logo">W</div>


            <ul className="nav-links" ref={navLinksRef}>
                <li>
                    <button 
                      className="inner-tab-button-01" 
                      onClick={() => {
                        toggleMenu();
                        scrollToSection(section2Ref);
                      }
                
                }>
                        <div className="inner-tab-no">01. </div>
                        <div className="inner-tab-text">About</div>
                    </button>   
                </li>
                <li>
                  <button 
                    className="inner-tab-button-01" 
                    onClick={() => {
                      toggleMenu();
                      scrollToSection(section3Ref);
                    }
                }>
                  <div className="inner-tab-no"> 02.</div>
                  <div className="inner-tab-text">Experience</div>
                </button>

                </li>
                <li>
                   <button className="inner-tab-button-01" onClick={() => {
                    toggleMenu();
                    scrollToSection(section4Ref);
                   }}>
                  <div className="inner-tab-no"> 03.</div>
                  <div className="inner-tab-text">Work</div>
                </button>
                </li>
                <li>
                   
                  <button className="inner-tab-button-01" onClick={() => {
                    toggleMenu();
                    scrollToSection(section5Ref);
                  }} >
                    <div className="inner-tab-no">04.</div>
                    <div className="inner-tab-text">Contact</div>
                </button>
                </li>
                <li>
                  <button className="email-link-top" onClick={()=> {
                    toggleMenu();
                    (window.open('https://drive.google.com/file/d/1rgLZ1AexKfyCjc_kkLlCtVNP18k7FzVX/view?usp=sharing'));
                  }}>
                    <div className="inner-tab-no-resume"></div>
                    <div className="inner-tab-text-resume">Resume</div>
                  </button>
                </li>
            </ul>
            <div
              className={`menu-toggle ${isToggled ? 'toggled' : 'default'}`}
              onClick={toggleMenu}
            >
      
            </div>
        </nav>
        </div>
        <div id="body">
          <div id="inner-body">


            <div id="section-1">

              <p id="first-line">Hi, my name is</p>
              <p id="second-line">Wishwa Kankanamge. </p>
              <p id="third-line">I build things for the web.</p>
              <p id="fourth-line">I'm a Full stack web developer recently graduted from university of westminster with Upper second Honours award in Business Information Systems. Currently i am seeking a job oppurtunity to work as a <span id="highlight-text">Associate web developer</span>. </p>
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
                      <p> My interest in software development started back in 2006 when i first received computer as a gift for receiving a scholarship to enter Matara Rahula Collage from Sooriyawewa National School.</p><p> After completing the O/L exam with 8 As and 1 B pass, I decided enter Business Information Systems degree program at IIT to learn more about building IT systems.  
</p><p>Fast forward to today, and I've had the priviledge of working at well known software development company <a href="https://wearedesigners.net/" target="_blank">We Are Designers</a>  where i got the oppurtunity to learn more about mobile and web applications development and testing.
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
            <div id='section-2-1' >
                <div id="coding-projects-header">
                  <p>Education</p>
                </div> 
              <div className="slider-container">
                {/* Previous Button */}
                <button 
                  className="next-btn" 
                  onClick={handlePrev} 
                  disabled={currentIndex === 0}
                >
                  &#8250;
                </button>

                <div
                  className="card-list"
                  ref={cardListRef}
                  onTouchStart={handleSwipeStart}
                  onTouchMove={handleSwipeMove}
                  onTouchEnd={handleSwipeEnd}
                >
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className={`
                        card 
                        ${currentIndex === index ? 'active' : ''} 
                        ${currentIndex === index - 1 ? 'previous' : ''} 
                        ${currentIndex === index + 1 ? 'next' : ''}
                      `}
                      style={{ backgroundColor: cardColors[index] }}
                    >
                      {card}
                    </div>
                  ))}
                </div>

                {/* Next Button */}
                <button 
                  className="prev-btn" 
                  onClick={handleNext} 
                  disabled={currentIndex === cardListRef.current?.children.length - 1}
                >
                  &#8249;
                </button>
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
                <div className="section-header-hairline">
          
                </div>
              </div>


              <div id="section-3-inner">


                <div id="section-3-left-bar" style={{ transform: `translateY(${barPosition}px)` }}>  
                </div>
                <div id="section-3-left-bar-mobile" style={{transform:`translateX(${barPosition*2.9}px)`}}>
                </div>
                <div id="section-3-buttons">  
                    <button 
                    style={{
                      cursor: 'pointer',
                      
                      padding: '10px 20px',
                      marginRight: '0px',
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
                <div className="section-header-hairline">
          
                </div>
              </div>

              <div id="built-project-1">
                <div id="featured-p-image">
                  <img id="data-chart" src={samproj2} alt="data_chart" />
                  <div id="data-chart-background"></div>
                </div>
                <div id="featured-p-info">
                  <div className="feature-project-heading"> Featured Project</div>
                  <div className="featured-project-heading-2"> Ceylon2World</div>
                  <div className="featured-project-info">This is my dissertation project, developed a web app which provides predicted market changes for specific sri lanka export product in specific foreign market. Prediction system is developed using ARIMA model optimized with grid search to deliver predictions with above 85% accuracy.</div>
                  <div className="tools-list">
                    <div className='tools-list-item-right'>Flask</div>
                    <div className='tools-list-item-right'>Scikit-learn</div>
                    <div className='tools-list-item-right'>React</div>
                    <div className='tools-list-item-right'>Tailwind CSS</div>
                  </div>
                  <div className="feature-project-button-list">
                      <div>
                            <a href="https://github.com/Wishwa-code/FYP_BI_app" target="_blank" rel="noopener noreferrer">
                                <div id="side-bar-buttons-github-p1"> </div>
                            </a>
                      </div>
                  </div>
                </div>
              </div>

              <div id="build-project-2">
                <div id="featured-p2-info">
                  <div className="feature-project-heading"> Featured Project</div>
                  <div className="featured-project-heading-2"> Panthiya</div>
                  <div className="featured-project-2-info">Online classroom app developed focusing on facilitating all the IT services for sri lankan private education institutes includeing video conferecing and message channels.</div>
                  <div className="tools-list">
                    <div className='tools-list-item-left'>Django</div>
                    <div className='tools-list-item-left'>React</div>
                    <div className='tools-list-item-left'>Agora SDK</div>
                    <div className='tools-list-item-left`'>WebRTC</div>
                  </div>
                  <div className="feature-project-button-list">

                    <div
                    
                      >
                        <a href="https://github.com/Wishwa-code/panthiya" target="_blank" rel="noopener noreferrer">
                            <div id="side-bar-buttons-github-p2"  alt="linked-in"> </div>
                        </a>
                      </div>

                      
                  </div>
                </div>
                <div id="featured-p2-image">
                  <img id="data-chart" src={samproj1} alt="data_chart" />
                  <div id="data-chart-background"></div>
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

                
                <div className="project-grid">
                
                  <div 
                  className="grid-item"
                  style={{
                    cursor:'pointer'
                  }}
                  onClick={() => (window.open('https://github.com/Wishwa-code/easychannel'))}
                  >
                    <div className='logo-bar'>
                      <div className='first-icon'>

                      </div>
                      <div 
                      className='second-logo'
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://github.com/Wishwa-code/easychannel')
                        }}>
                        <div id='first-tab-logo'>
                        </div>
                      </div>
                    </div>

                    <div className='grid-item-title' id='title-grid-1'>EasyChannel</div>
                    <div className='grid-item-body'>A mobile application for private medical institutes to manage appointments powered by ML model to preedict session time durations.</div>
                    <div className='grid-item-tool-list'>
                      <div className='grid-item-tool-list-item'>Flutter</div>
                      <div className='grid-item-tool-list-item'>Firebase</div>
                      <div className='grid-item-tool-list-item'>Python</div>
                      <div className='grid-item-tool-list-item'>Sci-kit</div>
                    </div>
                  </div>

                  <div 
                    className="grid-item"
                    style={{
                      cursor:'pointer'
                    }}
                    onClick={ () => (window.open('https://github.com/Wishwa-code/CS50-Project-Books'))}
                    >
                    <div className='logo-bar'>
                      <div className='first-icon'>

                      </div>
                      <div 
                      className='second-logo'
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://github.com/Wishwa-code/CS50-Project-Books')
                        }}>
                        <div id='second-tab-logo'>

                        </div>
                      </div>
                    </div>
                    <div className='grid-item-title' id='title-grid-1'>Book Review Website</div>
                    <div className='grid-item-body'>A online library created with Bookreads API to get details of any book using ISBN number and review.</div>
                    <div className='grid-item-tool-list'>
                      <div className='grid-item-tool-list-item'>Flask</div>
                      <div className='grid-item-tool-list-item'>MySQL</div>
                      <div className='grid-item-tool-list-item'>SCSS</div>
                    </div>
                  </div>
                  


                      <div 
                  className="grid-item"
                  style={{
                    cursor:'pointer'
                  }}
                  onClick={ () => (window.open('https://github.com/me50/wishwa-50'))}
                  >
                    <div className='logo-bar'>
                      <div className='first-icon'>

                      </div>
                      <div 
                      className='second-logo'
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://github.com/me50/wishwa-50')
                      }}
                      >
                        <div id='first-tab-logo'>

                        </div>
                      </div>
                    </div>
                    <div className='grid-item-title' id='title-grid-1'>Email app</div>
                    <div className='grid-item-body'>Email client that makes API calls to send and receive email from backend developed using Django restframework.</div>
                    <div className='grid-item-tool-list'>
                      <div className='grid-item-tool-list-item'>Django</div>
                      <div className='grid-item-tool-list-item'>Vanilla JS</div>
                      <div className='grid-item-tool-list-item'>PostgreSQl</div>
                    </div>
                  </div>  

                  

                  

                </div>

                <div id="project-grid-switch" style={{ display: isVisible ? 'grid' : 'none' }}>
                  
                 <div 
                  className="grid-item"
                  style={{
                    cursor:'pointer'
                  }}
                  onClick={ () => (window.open('https://github.com/Wishwa-code/BIS_D-D'))}
                  >
                    <div className='logo-bar'>
                      <div className='first-icon'>

                      </div>
                      <div 
                      className='second-logo'
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://github.com/Wishwa-code/BIS_D-D')
                      }}
                      >
                        <div id='first-tab-logo'>

                        </div>
                      </div>
                    </div>
                    <div className='grid-item-title' id='title-grid-1'>DistantClass.lk</div>
                    <div className='grid-item-body'>A web application to display to display details of online tutors.</div>
                    <div className='grid-item-tool-list'>
                      <div className='grid-item-tool-list-item'>PHP</div>
                      <div className='grid-item-tool-list-item'>MySQL</div>
                      <div className='grid-item-tool-list-item'>Vanilla JS</div>
                    </div>
                  </div>


                      

                  <div 
                  className="grid-item"
                  style={{
                    cursor:'pointer'
                  }}
                  onClick={ () => (window.open('https://github.com/me50/wishwa-50/tree/web50/projects/2020/x/commerce'))}
                  >
                    <div className='logo-bar'>
                      <div className='first-icon'>

                      </div>
                      <div 
                      className='second-logo'
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://github.com/me50/wishwa-50/tree/web50/projects/2020/x/commerce')
                      }}
                      >
                        <div id='first-tab-logo'>

                        </div>
                      </div>
                    </div>
                    <div className='grid-item-title' id='title-grid-1'>E-commerce website</div>
                    <div className='grid-item-body'>E-bay like e-commerce auction site that will allow users to post auction listings, place bids on listings, etc..</div>
                    <div className='grid-item-tool-list'>
                      <div className='grid-item-tool-list-item'>Django</div>
                      <div className='grid-item-tool-list-item'>Vanilla JS</div>
                      <div className='grid-item-tool-list-item'>PostgreSQL</div>
                    </div>
                  </div> 

                  <div 
                  className="grid-item"
                  style={{
                    cursor:'pointer'
                  }}
                  onClick={ () => (window.open('https://github.com/me50/wishwa-50/tree/web50/projects/2020/x/wiki'))}
                  >
                    <div className='logo-bar'>
                      <div className='first-icon'>

                      </div>
                      <div 
                      className='second-logo'
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://github.com/me50/wishwa-50/tree/web50/projects/2020/x/wiki')
                      }}
                      >
                        <div id='first-tab-logo'>

                        </div>
                      </div>
                    </div>
                    <div className='grid-item-title' id='title-grid-1'>Online encyclopedia</div>
                    <div className='grid-item-body'>An online encyclopedia that consists of a number of encyclopedia entries on various topics.</div>
                    <div className='grid-item-tool-list'>
                      <div className='grid-item-tool-list-item'>Django</div>
                      <div className='grid-item-tool-list-item'>Vanilla JS</div>
                      <div className='grid-item-tool-list-item'>PostgreSQl</div>
                    </div>
                  </div>

                  <div 
                  className="grid-item"
                  style={{
                    cursor:'pointer'
                  }}
                  onClick={ () => (window.open('https://github.com/Wishwa-code/Saviya-React-Native_Firebase'))}
                  >
                   

                    <div className='logo-bar'>
                      <div className='first-icon-idea'>

                      </div>
                       <div className='card-right-side-buttons-some'>
                        <div 
                        className='second-logo'
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://github.com/Wishwa-code/Saviya-React-Native_Firebase')
                        }}
                        >
                          <div id='first-tab-logo'>

                          </div>
                        </div>

                        
                        <div
                        className='third-logo'
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://www.figma.com/proto/6TJckonwiiklrVYy5d1L97/SAVIYA?node-id=1-7&scaling=min-zoom')
                        }}
                        >
                          
                        </div>
                      </div>
                    </div>

                    <div className='grid-item-title' id='title-grid-1'>Saviya</div>
                    <div className='grid-item-body'>
A marketplace for sri lankan rural crafters to showcase their products.</div>
                    <div className='grid-item-tool-list'>
                      <div className='grid-item-tool-list-item'>React-native</div>
                      <div className='grid-item-tool-list-item'>Firebase</div>
                      <div className='grid-item-tool-list-item'>AWS</div>
                    </div>
                  </div> 

                    

                  
                   


                 
                </div> 

                <div id="switch-button-section">  
                  <button className='email-link' id="display-button" onClick={handleDisplayToggle}>  
                     Show {isVisible ? 'Less' : 'More'} 
                  </button>  
                </div> 


              </div>
 

              <div id="business-projects">
                <div id="coding-projects-header">
                  <p>Business Projects</p>
                </div>

                
                <div className="project-grid">
                  
                  <div 
                  className="grid-item"
                  style={{
                    cursor:'pointer'
                  }}
                  onClick={ () => (window.open('https://www.kaggle.com/code/wishwafr/bella-beat-case-study'))}
                  >
                    <div className='logo-bar'>
                      <div className='first-icon-idea'>

                      </div>
                      

                        <div
                        className='second-logo'
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://www.kaggle.com/code/wishwafr/bella-beat-case-study')
                        }}
                        >
                         <div id='first-tab-down'>
                          </div> 
                        </div>
                      
                    </div>
                    <div className='grid-item-title' id='title-grid-1'>Bellebeat Case study</div>
                    <div className='grid-item-body'>
R notebook created by analyzing publicly available smart device user's data to identify trends  to optimize their marketing strategy.</div>
                    <div className='grid-item-tool-list'>
                      <div className='grid-item-tool-list-item'>Google Data Analytics Professional Certificate</div>
                    </div>
                  </div> 
                  <div 
                  className="grid-item"
                  style={{
                    cursor:'pointer'
                  }}
                  onClick={ () => (window.open('https://drive.google.com/file/d/1ylaKhr15ClrP8cjJGNKhMrIZ-pSpI4VZ/view'))}
                  >
                    <div className='logo-bar'>
                      <div className='first-icon-idea'>

                      </div>
                      
                        <div 
                        className='second-logo'
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://drive.google.com/file/d/1ylaKhr15ClrP8cjJGNKhMrIZ-pSpI4VZ/view')
                        }}
                        >
                          <div id='first-tab-down'>

                          </div>
                        </div>

                        
                      
                    </div>
                    <div className='grid-item-title' id='title-grid-1'>Freecycle</div>
                    <div className='grid-item-body'>
Presented business model for non-profit website dedicated to find a second home for household furniture's.
                    </div>
                    <div className='grid-item-tool-list'>
                      <div className='grid-item-tool-list-item'>Strategic managment of business information systems.</div>
                      
                    </div>
                  </div> 

                   <div 
                  className="grid-item"
                  style={{
                    cursor:'pointer'
                  }}
                  onClick={ () => (window.open('https://drive.google.com/file/d/1ZTMoJrN6dimJk6cYrqa1AmCINIQtBitc/view'))}
                  >
                    <div className='logo-bar'>
                      <div className='first-icon-idea'>

                      </div>
                       <div className='card-right-side-buttons-some'>
                        <div 
                        className='second-logo'
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://drive.google.com/file/d/1ZTMoJrN6dimJk6cYrqa1AmCINIQtBitc/view')
                        }}
                        >
                          <div id='first-tab-down'>

                          </div>
                        </div>

                        <div
                        className='second-logo'
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://drive.google.com/file/d/1NbnvpKVn0Rgo6DCRb6TBRUqIpC81Icgd/view')
                        }}
                        >
                         <div id='first-tab-down'>
                          </div> 
                        </div>
                      </div>
                    </div>
                    <div className='grid-item-title' id='title-grid-1'>HelloFresh</div>
                    <div className='grid-item-body'>
Farm-to-market food delivery concept to reduce waste and stabilize prices using predictive analytics.</div>
                    <div className='grid-item-tool-list'>
                      <div className='grid-item-tool-list-item'>Information driven entrepreneurship and enterprise.</div>
                    </div>
                  </div> 
                  
                  

                  
                  
                </div>

                <div id="business-grid-switch" style={{ display: isBizvisible ? 'grid' : 'none' }}>
                  
                  <div 
                  className="grid-item"
                  style={{
                    cursor:'pointer'
                  }}
                  onClick={ () => (window.open('https://drive.google.com/file/d/1ZsgkueOVUQs4Ouh57g664gNgQACWhH5O/view'))}
                  >
                    <div className='logo-bar'>
                      <div className='first-icon'>

                      </div>
                      <div 
                      className='second-logo'
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://drive.google.com/file/d/1ZsgkueOVUQs4Ouh57g664gNgQACWhH5O/view')
                      }}
                      >
                        <div id='first-tab-down'>

                        </div>
                      </div>
                    </div>
                    <div className='grid-item-title' id='title-grid-1'>MongoDB Research Poster</div>
                    <div className='grid-item-body'>
How is MongoDB used for Big Data and what are the associated data governance and data quality issues</div>
                    <div className='grid-item-tool-list'>
                      <div className='grid-item-tool-list-item'>Big Data Analytics</div>
              
                    </div>
                  </div> 

                   <div 
                  className="grid-item"
                  style={{
                    cursor:'pointer'
                  }}
                  onClick={ () => (window.open('https://sites.google.com/iit.ac.lk/pissukanna/home?authuser=0'))}
                  >
                    

                    <div className='logo-bar'>
                      <div className='first-icon-idea'>

                      </div>
                       <div className='card-right-side-buttons-some'>
                        <div 
                        className='second-logo'
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://drive.google.com/file/d/1H1CRw9s847jWNoaTJw0AoX_of4yypQVK/view')
                        }}
                        >
                          <div id='first-tab-down'>

                          </div>
                        </div>

                        <div
                        className='third-logo'
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://sites.google.com/iit.ac.lk/pissukanna/home?authuser=0')
                        }}
                        >
                          
                        </div>
                      </div>
                    </div>

                    <div className='grid-item-title' id='title-grid-1'>PissuKanna microsite</div>
                    <div className='grid-item-body'>
A SEO optimized microsite to promote a sri lankan celebrity and monitor web trafiic using google analytics.</div>
                    <div className='grid-item-tool-list'>
                      <div className='grid-item-tool-list-item'>Digital marketing and web analytics</div>
                    </div>
                  </div> 

                </div> 

                <div id="b-switch-button-section">  
                  <button className='email-link' id="display-button" onClick={handlebusinessDisplayToggle}>  
                      Show {isBizvisible ? 'Less' : 'More'}   
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
              <div id="section-6-body"> Currently i am looking for fullstack web developer vacancy. Please feel free to reach out to me if you have a question or just want to say hi, I'll get back to you as soon as possible.<br></br> Thankyou!
              </div>
              <div className='style-button-container'>
                
    
                <a href="https://wa.me/94771631976?text=Hello%20from%20my%20website!" target="_blank" className='email-link-wp'>
                
                <div id="whatapp-icon">

                </div>
                Say hello
                
                </a>
                
              </div>

            </div>


            <div id="footer-inner">
              <div id="mobile-footer-logo-list">
              <a href='https://github.com/Wishwa-code' target='_blank'>
               <div id='fot-git-logo' className='mob-footer-item'>
                    
               </div>
              </a>
            
            <a href='https://www.instagram.com/_wishwa_/' target='_blank'>
              <div id='fot-insta-logo' className='mob-footer-item'>
                      
               </div>
            </a>
            <a href='https://www.linkedin.com/in/wishwa-subhasingha-2404051b5/' target='_blank'>
               <div id='fot-linkedin-logo' className='mob-footer-item'>
                      
               </div>
            </a>
              </div>
              <a href="https://github.com/Wishwa-code/portfolio" target="_blank"><p> Designed & Built by Wishwa Kankanamge</p></a>
            </div>



          </div>
        </div>

       
      
    </div>
  );
}

export default App;
