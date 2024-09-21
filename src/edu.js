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
                    Quality Assurance Engineer
                </div>
                <div className="location">
                    <div className="location-icon">
                    &nbsp;@&nbsp;
                    </div>
                    <div className="location-name">
                    We Are Designers
                    </div>
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
    return (
        <>
        <p>GDAAAAAA</p>
        </>
    )
}

