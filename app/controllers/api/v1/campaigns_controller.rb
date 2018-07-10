class Api::V1::CampaignsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :index]

  def index
    campaigns = Campaign.all
    render json: campaigns
  end

end
