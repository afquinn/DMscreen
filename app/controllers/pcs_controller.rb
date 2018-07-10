class PcsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index;
  end

  def show
    render json: { pc: Pc.all.sample }
  end

  def create
    binding.pry
   @pc = Pc.new(text: params[:pc])
   if pc.save
     render json: { pc: pc }
   else
     render json: { error: pc.errors.full_messages }, status: :unprocessable_entity
   end
  end

  protected
  def pc_params
    params.require(:pc).permit
  end
end
