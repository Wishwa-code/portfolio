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
                    Business Information Systems
                </div>
                <div className="location">
                    <div className="location-icon">
                    &nbsp;@&nbsp;
                    </div>
                    <div className="location-name">
                    UOW
                    </div>
                </div>
            </div>
            <div className="time-period">June 2021 - June 2022</div>
            <div className="main-content">The program is designed to equip students with the skills and knowledge to develop, implement, and manage information systems within a business context.</div>
            <div className="body-of-edu">
                <div className="items-body-edu">
                    <div className="items-body-edu-bullet">
                        <p>b</p>
                    </div>
                    <div className="items-body-edu-text">
                        <p>some point</p>
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

