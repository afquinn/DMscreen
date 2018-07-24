class Api::V1::CampaignsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :index]

  def index
    campaigns = Campaign.all
    render json: campaigns
  end

  def create
   @campaign = Campaign.new(campaign_params)
   if @campaign.save
     render json: { campaign: @campaign }
   else
     render json: { error: campaign.errors.full_messages }, status: :unprocessable_entity
   end
  end

  private

  def campaign_params
    {dm: current_user,
     name: params[:name],
     description: params[:description]
   }
  end



end
