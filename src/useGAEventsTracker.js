import ReactGA from 'react-ga';

const useGAEventsTracker = (category = "Event Category") => {
    const trackevent = (action = "Event Action", label = "Event Label") => {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    }
    return trackevent;
}

export default useGAEventsTracker