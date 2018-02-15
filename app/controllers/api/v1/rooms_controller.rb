class Api::V1::RoomsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :index, :show]

  def index
    dungeon = Dungeon.find(params[:dungeon_id])
    rooms = dungeon.rooms
    render json: rooms
  end

  def show
    
    room = Room.find(params[:id])
    render json: room
  end

  # private
  #   def room_params
  #     params.require(:room).permit(:name, :description, )
  #   end

end
