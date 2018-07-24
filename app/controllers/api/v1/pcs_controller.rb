class Api::V1::PcsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :index]

  def index
    pcs = Pc.all
    render json: pcs
  end

  def create
   @pc = Pc.new(pc_params)
   if @pc.save
     render json: { pc: @pc }
   else
     render json: { error: pc.errors.full_messages }, status: :unprocessable_entity
   end
  end


  private

  def pc_params
    {user: current_user,
     name: params[:name],
     level: params[:level],
     character_class: params[:character_class],
     avatar: params[:avatar],
     bio: params[:bio],
     campaign_id: 1
   }
  end

end
