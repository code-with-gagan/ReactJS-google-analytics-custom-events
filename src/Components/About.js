import React, { useEffect } from 'react'
import ReactGA from 'react-ga';
import useGAEventsTracker from '../useGAEventsTracker';

const About = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    const GAEventsTracker = useGAEventsTracker("Button");

    return (
        <div>
            <h1>About Page</h1>
            <button type='button' onClick={() => GAEventsTracker("Button Clicked", "About Button")}>click about</button>
        </div>
    )
}

export default About
