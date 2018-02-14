let roomPic;
roomPic = <RoomPictureTile floorplan_picture = {this.state.room.picture}/>
let featureTile;
featureTile = <FeatureTile key = {this.state.room.id} monsters = {this.state.room.monsters} traps = {this.state.room.traps} treasure = {this.state.room.treasure} description = {this.state.room.id} />
