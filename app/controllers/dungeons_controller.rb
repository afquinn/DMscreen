class DungeonsController < ApplicationController

  def show
    @dungeon = Dungeon.find(params[:id])
  end

end
