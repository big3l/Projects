//https://reacttraining.com/react-router/web/example/nesting

import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from 'react-router-dom';

export default class NestedRoutes extends Component {
    render() {
        return (
            <div>
                <hr />
                <h1>This the next example: Nested Routes</h1>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/topics'>Topics to Learn</Link>
                            </li>
                        </ul>
                        <hr />
                        <br />
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route path='/topics'>
                                <Topics />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

const Home = () => (
    <div>
        <h2>Home Page</h2>
    </div>
)

function Topics() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2>Topics Page</h2>
            <ul>
                <li>
                    <Link to={`${url}/classComponent`}>Class Component in React</Link>
                </li>
                <li>
                    <Link to={`${url}/reactstrap`}>Bootstrap with React (Reactstrap)</Link>
                </li>
                <li>
                    <Link to={`${url}/stateProps`}>State and Props in React</Link>
                </li>
            </ul>
            <br />

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a react topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    )
}

function Topic() {
    let { topicId } = useParams();
    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}