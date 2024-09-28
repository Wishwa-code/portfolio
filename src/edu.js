import { useState, useEffect, useRef } from "react";
import './educustom.css'
import { tab } from "@testing-library/user-event/dist/tab";

export function BIS() {

    const bisRef = useRef(null);

    useEffect(() => {
        if (bisRef.current){
        bisRef.current.style.backgroundColour = 'darkbue';
    }
    },[]);

    return (
        <>
        <div id="BIS-inner-tab" ref={bisRef}>
            <div className="first-header-row">
                <div className="main-title">
                    Intern QA Engineer
                </div>
                <div className="location">
                    <div className="location-icon">
                    &nbsp;@&nbsp;
                    </div>
                    <a href="https://wearedesigners.net/" target='_blank'>
                        <div className="location-name" id="source-link">
                        We Are Designers
                        </div>
                    </a>
                </div>
            </div>
            <div className="time-period">June 2021 - June 2022</div>

            <div className="body-of-edu">
                <div className="items-body-edu">
                    <div className="items-body-edu-bullet">
                    </div>
                    <div className="items-body-edu-text">
                        Worked for both mobile and web development teams.
                    </div>
                </div>
            </div>

            <div className="body-of-edu">
                <div className="items-body-edu">
                    <div className="items-body-edu-bullet">
                    </div>
                    <div className="items-body-edu-text">
                        Created test cases for the front-end and back-end features of mobile and
                        web applications.
                    </div>
                </div>
            </div>

            <div className="body-of-edu">
                <div className="items-body-edu">
                    <div className="items-body-edu-bullet">
                    </div>
                    <div className="items-body-edu-text">
                    Created automated tests using Selenium for functional testing, performed
UI testing, performed cross-browser compatibility testing, and performance
testing throughout the SDLC for 5 large scale websites of well established
Sri Lankan organizations and 4 single-page websites.
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}



export function GDA () {
    
    const bisRef = useRef(null);

    useEffect(() => {
        if (bisRef.current){
        bisRef.current.style.backgroundColour = 'darkbue';
    }
    },[]);

    return (
        <>
        <div id="BIS-inner-tab" ref={bisRef}>
            <div className="first-header-row">
                <div className="main-title">
                    Social Media Manager
                </div>
                <div className="location">
                    <div className="location-icon">
                    &nbsp;@&nbsp;
                    </div>
                    <a href="https://www.fpasrilanka.org/en" target="_blank" id="source-link">
                        <div className="location-name">
                        FPA
                        </div>
                    </a>
                </div>
            </div>
            <div className="time-period">June 2022 - June 2023</div>

            <div className="body-of-edu">
                <div className="items-body-edu">
                    <div className="items-body-edu-bullet">
                    </div>
                    <div className="items-body-edu-text">
                        Created a social media strategy to increase the organic reach of the social media channels.
                    </div>
                </div>
            </div>

            <div className="body-of-edu">
                <div className="items-body-edu">
                    <div className="items-body-edu-bullet">
                    </div>
                    <div className="items-body-edu-text">
                        Managed the timely release of content for all the media channels.
                    </div>
                </div>
            </div>

            <div className="body-of-edu">
                <div className="items-body-edu">
                    <div className="items-body-edu-bullet">
                    </div>
                    <div className="items-body-edu-text">
                        Directed the process of creating video content from script to editing and release to the official channels.
                    </div>
                </div>
            </div>

        </div>
        </>
    )
} 
