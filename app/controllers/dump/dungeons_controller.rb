class Api::V1::DungeonsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    dungeon = Dungeon.all
    render json: dungeon
  end

  def show
    render json: Dungeon.find(params[:id])
  end

  private
    def dungeon_params
      params.require(:dungeon).permit(:name, :cover_picture, :description, :master_floor_plan)
    end

end
