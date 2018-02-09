class RoomsController < ApplicationController

  def show
    @room = Room.find(params[:id])
    @dungeon = @room.dungeon
  end

end
