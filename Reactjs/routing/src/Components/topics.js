import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function Topics() {
    let { path, url } = useRouteMatch();

    return (
        <div className="dropdown-content">
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/Link1`}>Link 1</Link>
                </li>
                <li>
                    <Link to={`${url}/Link2`}>Link 2</Link>
                </li>
                <li>
                    <Link to={`${url}/Link3`}>Link 3</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

export function Topic() {
    let { topicId } = useParams();
    return (
        <div className='link'>
            <h3>Topic with ID: {topicId}</h3>
        </div>
    );
}
