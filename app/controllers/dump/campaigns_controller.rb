class Api::V1::CampaignsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    campaign = Campaign.all
    render json: campaign
  end

  def show
    render json: Campaign.find(params[:id])
  end

  private
    def campaign_params
      params.require(:campaign).permit(:name, :cover_photo, :description)
    end

end
