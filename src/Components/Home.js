import React, { useEffect } from 'react'
import ReactGA from 'react-ga';
import useGAEventsTracker from '../useGAEventsTracker';

const Home = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    const GAEventsTracker = useGAEventsTracker("Button");

    return (
        <div>
            <h1>Home Page</h1>
            <button type='button' onClick={() => GAEventsTracker("Button Clicked", "Home Button")}>Click Home</button>
        </div>
    )
}

export default Home
