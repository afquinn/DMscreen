class Api::V1::DungeonsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :index]

  def index
    dungeons = Dungeon.all
    render json: dungeons

  end

end
