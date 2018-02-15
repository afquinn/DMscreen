class Api::V1::RoomsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    room = Room.all
    render json: room
  end

  def show
    render json: Room.find(params[:id])
  end

  private
    def room_params
      params.require(:room).permit(:description, :picture, :traps, :monsters, :treasure)
    end

end
