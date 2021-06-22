import React from 'react'
import { Switch, Route } from "react-router";
import { Home } from '../pages/Home';
import { NewRoom } from '../pages/NewRoom';


export default function Routers() {
  return (
    <Switch>
      <Route path="/rooms/new" component={NewRoom}/>
      <Route exact={true} path="/" component={Home}/>
    </Switch>
  )
}
