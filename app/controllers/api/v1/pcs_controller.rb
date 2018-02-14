class Api::V1::PcsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :index]

  def index
    pcs = Pc.all
    render json: pcs

  end



  private
    def pc_params
      params.require(:pc).permit(:name, :avatar)
    end

end
