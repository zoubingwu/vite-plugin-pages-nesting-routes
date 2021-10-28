import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'
import React from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'

const component: React.FC<RouteConfigComponentProps> = ({ route }) => {
  const child = route?.routes?.map(r => ({ ...r, path: `${route.path === '/' ? '' : route.path}${r.path}`,  exact: r.path === '/' }))

  console.log('child: ', route, child);

  return (
    <div>
      <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/topics">topics</Link>
          </li>
          <li>
            <Link to="/test">test</Link>
          </li>
        </ul>

      <p>nested view:</p>
      {renderRoutes(child)}
    </div>
  )
}



export default component
