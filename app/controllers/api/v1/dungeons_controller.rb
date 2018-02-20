class Api::V1::DungeonsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :index, :show]

  def index
    dungeons = Dungeon.all
    render json: dungeons

  end

  def show
    binding.pry
    dungeon = Dungeon.find(params[:id])
    render json: dungeon
  end


end
