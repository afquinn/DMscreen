import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import PcIndexContainer from './containers/PcIndexContainer'
import RoomShowContainer from './containers/RoomShowContainer'
import DungeonShowContainer from './containers/DungeonShowContainer'
import NewPcContainer from './containers/NewPcContainer'


const App = (props) => {
return(
  <Router history={browserHistory}>
    <Route path='/' component={PcIndexContainer} />
    <Route path='/campaigns/:campaign_id/dungeons/:dungeon_id/rooms/:room_id' component={RoomShowContainer} />
    <Route path='/campaigns/:campaign_id/dungeons/:dungeon_id' component={DungeonShowContainer} />
    <Route path='/pcs/new' component={NewPcContainer} />

  </Router>
)}

export default App;
