

import { 
  Route,
  NavLink,
  Switch
} from 'react-router-dom'

const RouteView = (props) => {
  return (
    <Switch>
      {
        props.children && props.children.map((route, idx) => (
          <Route 
            key={idx}
            path={route.path}
            render={(props) => {
              return (
                route.component && (
                  <route.component
                    children={route.children}
                    {...props}
                  ></route.component>
                )
              )
            }}       
          ></Route>
        ))
      }
    </Switch>
  )
}

export default RouteView