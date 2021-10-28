import React from 'react'
import { renderRoutes } from 'react-router-config';
import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'

// @ts-ignore
export default function Topics({ route }) {
  console.log('route: ', route);
  let { path, url } = useRouteMatch();
  console.log('path: ', path);

  const Topic = route.children[0].component

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:id`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}
