import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import PcIndexContainer from './containers/PcIndexContainer'
import RoomShowContainer from './containers/RoomShowContainer'


const App = (props) => {
return(
  <Router history={browserHistory}>
    <Route path='/' component={PcIndexContainer} />
    <Route path='/campaigns/:campaign_id/dungeons/:dungeon_id/rooms/:room_id' component={RoomShowContainer} />

  </Router>
)}

export default App;
