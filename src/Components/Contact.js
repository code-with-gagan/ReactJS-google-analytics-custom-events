import React, { useEffect } from 'react'
import ReactGA from 'react-ga';
import useGAEventsTracker from '../useGAEventsTracker';

const Contact = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    // const GAEventsTracker = useGAEventsTracker("Button");
    const handleBtn1 = () => {
        ReactGA.event({
            category: "button",
            action: "Clicked",
            label: "contact btn"
        });
    }

    const handleBtn2 = () => {
        ReactGA.event({
            category: "Link",
            action: "Clicked",
            label: "Github link"
        });
    }

    return (
        <div>
            <h1>Contact Page</h1>
            <button type='button' onClick={handleBtn1}>Click Contact</button>
            <button type='button' onClick={handleBtn2}> Click Contact 1 </button>
        </div>
    )
}

export default Contact
