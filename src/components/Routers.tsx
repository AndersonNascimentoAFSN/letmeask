import React from 'react'
import { Switch, Route } from "react-router";
import { Home } from '../pages/Home';
import { NewRoom } from '../pages/NewRoom';
import { Room } from '../pages/Room';


export default function Routers() {
  return (
    <Switch>
      <Route exact path="/rooms/new" component={NewRoom}/>
      <Route path="/rooms/:id" component={Room}/>
      <Route exact={true} path="/" component={Home}/>
    </Switch>
  )
}
